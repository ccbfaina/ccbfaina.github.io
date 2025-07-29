<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTags, settingsApp } from '~/stores/stores.js'

const settings = settingsApp()
const storeTags = useTags()
const router = useRouter()
const route = useRoute()

definePageMeta({ layout: 'home' })

const searchText = ref('')

// Preenche o campo com base na query ?search=
onMounted(() => {
  const querySearch = route.query.search
  if (typeof querySearch === 'string') {
    searchText.value = querySearch
  }
})

// Função de normalização
const normalizeString = (str) =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const sugestoesAtuais = computed(() => {
  const search = searchText.value.trim()
  if (!search) return storeTags.tags.slice(0, 23)

  const terms = normalizeString(search).split(/\s+/).filter(Boolean)

  return storeTags.tags.filter((tag) => {
    const targetWords = normalizeString(
      `${tag.title || ''} ${tag.description || ''} ${tag.group || ''}`
    )
      .split(/\s+/)
      .filter(Boolean)

    return terms.every((term) =>
      targetWords.some((word) => word.includes(term))
    )
  })
})

const onInput = (e) => {
  searchText.value = e.target.value
}

const buscar = () => {
  const texto = searchText.value.trim()
  if (!texto) return alert('Por favor, digite sua busca!')

  const tag = sugestoesAtuais.value.find(
    (t) => normalizeString(t.title) === normalizeString(texto)
  ) || { href: `/lista?search=${encodeURIComponent(texto)}` }

  if (!tag.href) return
  if (/^http/.test(tag.href)) window.open(tag.href, '_blank')
  else router.push(tag.href)
}

const selecionarSugestao = (sugestao) => {
  searchText.value = ''
  if (!sugestao.href) return
  if (/^http/.test(sugestao.href)) window.open(sugestao.href, '_blank')
  else router.push(sugestao.href)
}
</script>

<template>
  <div class="main">
    <header>
      <div class="search content">
        <i class="la la-search clickable" @click="buscar"></i>
        <input
          type="text"
          placeholder="Pesquisar..."
          :value="searchText"
          @input="onInput"
          @keyup.enter="buscar"
        />
        <i
          v-show="searchText"
          class="la la-times clickable"
          @click="searchText = ''"
        ></i>
      </div>
    </header>

    <div class="suggestions">
      <ul class="content">
        <li
          v-for="(sugestao, index) in sugestoesAtuais"
          :key="
            sugestao.href + sugestao.title.replace(/[^a-zA-Z0-9 ]/g, '') + index
          "
          @click="() => selecionarSugestao(sugestao)"
        >
          <i :class="[sugestao.icon || 'la la-folder', 'icon']"></i>
          <div>
            <strong class="title">{{ sugestao.title }}</strong>
            <small>{{ sugestao.description }}</small>
          </div>
        </li>
        <li v-show="!sugestoesAtuais.length" @click="buscar">
          <i class="la la-calendar"></i>
          <div>
            <strong>Pesquisar na agenda</strong>
            <small>Nenhum resultado encontrado.</small>
          </div>
        </li>
      </ul>
    </div>

    <div class="buttons">
      <div class="content">
        <NuxtLink to="/navegar"><button>Navegar</button></NuxtLink>
        <NuxtLink to="/lista/proximos"
          ><button>Próximos eventos</button></NuxtLink
        >
      </div>
    </div>

    <footer>
      <div class="content footer">
        <span>Regional Faina</span>
        <NuxtLink to="/sobre">Sobre</NuxtLink>
        <NuxtLink to="/navegar">Páginas</NuxtLink>
        <NuxtLink to="/settings">
          <div style="position: relative; display: inline-block">
            <i class="la la-cog"></i>
            <span v-show="settings.pendingConfigsCount > 0" class="badge">
              {{ settings.pendingConfigsCount }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

header {
  padding: 0.5rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
}

.search {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 0.25rem 0.75rem;
}

.search input {
  flex: 1;
  border: none;
  outline: none;
}

.clickable {
  cursor: pointer;
}

.suggestions {
  overflow-y: auto;
  list-style: none;
  background: #fff;
  li {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.75rem 0rem;
    border-bottom: 1px solid #eee;
    cursor: pointer;

    .icon {
      font-size: 1.5rem;
    }

    strong.title {
      font-size: 1.1rem;
    }
  }

  li:hover {
    background: #f5f5f5;
    color: #033d60;
  }

  strong {
    display: block;
  }

  small {
    color: #777;
    font-size: 0.9rem;
  }
}

.buttons {
  .content {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    button {
      font-size: 0.9rem;
      background: #f5f5f5;
      border: 1px solid #ccc;
      padding: 0.5rem;
      border-radius: 0.25rem;
      color: #033d60;
      cursor: pointer;
    }
  }
}

footer {
  background: #f2f2f2;
  border-top: 1px solid #ddd;
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    a {
      color: #033d60;
    }
  }
}

.badge {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  min-width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 50%;
  background-color: #dc2626;
  color: #fff;
  font-size: 0.75em;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
</style>

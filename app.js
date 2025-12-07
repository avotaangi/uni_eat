const meals = [
  // Завтраки
  {
    id: 'syrniki',
    name: 'Сырники с творогом',
    shortName: 'Сырники',
    description: 'Нежные сырники из творога, подаются со сметаной или вареньем',
    category: 'Завтраки',
    price: 110,
    options: ['Сметана', 'Варенье'],
    image: 'images/сырники.png',
  },
  {
    id: 'draniki',
    name: 'Драники',
    shortName: 'Драники',
    description: 'Картофельные оладьи, жареные до золотистой корочки',
    category: 'Завтраки',
    price: 120,
    options: ['Сметана'],
    image: 'images/драник.png',
  },
  {
    id: 'blini-cherry',
    name: 'Блинчики с вишней',
    shortName: 'Блинчики с вишней',
    description: 'Тонкие блинчики с начинкой из вишни',
    category: 'Завтраки',
    price: 110,
    options: ['Сметана', 'Варенье'],
    image: 'images/блинчики_с_вишней.png',
  },
  {
    id: 'blini-meat',
    name: 'Блинчики с мясной начинкой',
    shortName: 'Блинчики с мясом',
    description: 'Блинчики с начинкой из мясного фарша',
    category: 'Завтраки',
    price: 110,
    options: [],
    image: 'images/блинчики_с_мясом.png',
  },
  // Супы
  {
    id: 'soup-vegetables',
    name: 'Суп-пюре из разных овощей',
    shortName: 'Суп-пюре',
    description: 'Нежный суп-пюре из сезонных овощей',
    category: 'Супы',
    price: 60,
    options: [],
    image: 'images/суп-пюре.png',
  },
  {
    id: 'solyanka',
    name: 'Солянка студенческая',
    shortName: 'Солянка',
    description: 'Наваристая солянка с мясными продуктами',
    category: 'Супы',
    price: 80,
    options: [],
    image: 'images/солянка.png',
  },
  {
    id: 'chicken-soup',
    name: 'Куриный суп',
    shortName: 'Куриный суп',
    description: 'Ароматный куриный суп с лапшой и зеленью',
    category: 'Супы',
    price: 60,
    options: [],
    image: 'images/куриный_суп.png',
  },
  // Вторые блюда
  {
    id: 'salat-diplomat',
    name: 'Салат Дипломат',
    shortName: 'Салат Дипломат',
    description: 'Салат с ветчиной, сыром, огурцами и яйцом',
    category: 'Вторые блюда',
    price: 75,
    options: [],
    image: 'images/салат_дипломат.png',
  },
  {
    id: 'potato-village',
    name: 'Картофель деревенский',
    shortName: 'Картофель деревенский',
    description: 'Запеченный картофель с травами',
    category: 'Вторые блюда',
    price: 50,
    options: [],
    image: 'images/картофель_деревенский.png',
  },
  {
    id: 'beefsteak',
    name: 'Бифштекс рубленый',
    shortName: 'Бифштекс',
    description: 'Рубленый бифштекс из говядины',
    category: 'Вторые блюда',
    price: 100,
    options: [],
    image: 'images/бифштекс.png',
  },
  {
    id: 'chicken-cutlets',
    name: 'Котлеты куриные',
    shortName: 'Котлеты куриные',
    description: 'Нежные куриные котлеты',
    category: 'Вторые блюда',
    price: 100,
    options: [],
    image: 'images/котлеты_куриные.png',
  },
  {
    id: 'rice',
    name: 'Рис',
    shortName: 'Рис',
    description: 'Отварной рис на гарнир',
    category: 'Вторые блюда',
    price: 40,
    options: [],
    image: 'images/рис.png',
  },
  {
    id: 'home-cutlet',
    name: 'Котлета домашняя',
    shortName: 'Котлета домашняя',
    description: 'Домашняя котлета по традиционному рецепту',
    category: 'Вторые блюда',
    price: 100,
    options: [],
    image: 'images/котлета_домашняя.png',
  },
  {
    id: 'potato-fried',
    name: 'Картофель жареный',
    shortName: 'Картофель жареный',
    description: 'Жареный картофель с луком',
    category: 'Вторые блюда',
    price: 50,
    options: [],
    image: 'images/картофель_жареный.png',
  },
  {
    id: 'chicken-nuggets',
    name: 'Наггетсы куриные',
    shortName: 'Наггетсы',
    description: 'Хрустящие куриные наггетсы',
    category: 'Вторые блюда',
    price: 110,
    options: [],
    image: 'images/наггетсы.png',
  },
  {
    id: 'pink-salmon',
    name: 'Филе горбуши',
    shortName: 'Филе горбуши',
    description: 'Филе горбуши на пару или запеченное',
    category: 'Вторые блюда',
    price: 130,
    options: [],
    image: 'images/филе_горбуши.png',
  },
  {
    id: 'pasta',
    name: 'Макароны',
    shortName: 'Макароны',
    description: 'Макароны отварные на гарнир',
    category: 'Вторые блюда',
    price: 30,
    options: [],
    image: 'images/макароны.png',
  },
  {
    id: 'sausages',
    name: 'Сосиски',
    shortName: 'Сосиски',
    description: 'Сосиски с гарниром на выбор',
    category: 'Вторые блюда',
    price: 130,
    options: [],
    image: 'images/сосиски.png',
  },
  {
    id: 'salat-olivier',
    name: 'Салат оливье',
    shortName: 'Салат оливье',
    description: 'Классический салат оливье',
    category: 'Вторые блюда',
    price: 75,
    options: [],
    image: 'images/салат_оливье.png',
  },
  // Десерты
  {
    id: 'eclair',
    name: 'Эклер',
    shortName: 'Эклер',
    description: 'Воздушный эклер с заварным кремом',
    category: 'Десерты',
    price: 80,
    options: [],
    image: 'images/эклер.png',
  },
  {
    id: 'honey-cake',
    name: 'Пирожное медовик',
    shortName: 'Медовик',
    description: 'Нежное медовое пирожное',
    category: 'Десерты',
    price: 80,
    options: [],
    image: 'images/медовик.png',
  },
  {
    id: 'home-cake',
    name: 'Домашнее пирожное',
    shortName: 'Домашнее пирожное',
    description: 'Пирожное по домашнему рецепту',
    category: 'Десерты',
    price: 80,
    options: [],
    image: 'images/домашнее_пирожное.png',
  },
  {
    id: 'cream-ring',
    name: 'Кольцо заварное с кремом',
    shortName: 'Кольцо заварное',
    description: 'Заварное кольцо с нежным кремом',
    category: 'Десерты',
    price: 60,
    options: [],
    image: 'images/кольцо_заварное.png',
  },
  {
    id: 'turkish-sweets',
    name: 'Турецкие сладости',
    shortName: 'Турецкие сладости',
    description: 'Ассорти восточных сладостей',
    category: 'Десерты',
    price: 45,
    options: [],
    image: 'images/турецкие_сладости.png',
  },
  // Напитки
  {
    id: 'tea',
    name: 'Чай',
    shortName: 'Чай',
    description: 'Чай черный, зеленый, травяной',
    category: 'Напитки',
    price: 20,
    options: [],
    image: 'images/чай.png',
  },
  {
    id: 'soda',
    name: 'Газированная вода',
    shortName: 'Газированная вода',
    description: 'Газированная вода в ассортименте',
    category: 'Напитки',
    price: 80,
    options: [],
    image: 'images/газированная_вода.png',
  },
  {
    id: 'juice',
    name: 'Сок',
    shortName: 'Сок',
    description: 'Сок в ассортименте: апельсиновый, яблочный, томатный',
    category: 'Напитки',
    price: 50,
    options: [],
    image: 'images/сок.png',
  },
];

const categories = ['Все', 'Завтраки', 'Супы', 'Вторые блюда', 'Десерты', 'Напитки'];

// Функции для работы с localStorage
const saveCartToStorage = () => {
  try {
    localStorage.setItem('uni_eat_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.error('Ошибка сохранения корзины в localStorage:', e);
  }
};

const clearCart = () => {
  state.cart = [];
  saveCartToStorage();
  setState({ cart: [] });
};

const getCartItemsCount = () => {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
};

const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem('uni_eat_cart');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Ошибка загрузки корзины из localStorage:', e);
  }
  return [];
};

const saveBookingDataToStorage = (bookingData) => {
  try {
    // Сохраняем все данные кроме даты
    const dataToSave = {
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      studentId: bookingData.studentId,
      guests: bookingData.guests,
      time: bookingData.time,
    };
    localStorage.setItem('uni_eat_booking', JSON.stringify(dataToSave));
    
    // Сохраняем дату и время для отображения в QR-коде
    if (bookingData.date && bookingData.time) {
      localStorage.setItem('uni_eat_order_date', bookingData.date);
      localStorage.setItem('uni_eat_order_time', bookingData.time);
    }
  } catch (e) {
    console.error('Ошибка сохранения данных бронирования в localStorage:', e);
  }
};

const loadBookingDataFromStorage = () => {
  try {
    const saved = localStorage.getItem('uni_eat_booking');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Ошибка загрузки данных бронирования из localStorage:', e);
  }
  return null;
};

const saveFavoritesToStorage = () => {
  try {
    const favoritesArray = Array.from(state.favorites);
    localStorage.setItem('uni_eat_favorites', JSON.stringify(favoritesArray));
  } catch (e) {
    console.error('Ошибка сохранения избранного в localStorage:', e);
  }
};

const loadFavoritesFromStorage = () => {
  try {
    const saved = localStorage.getItem('uni_eat_favorites');
    if (saved) {
      const favoritesArray = JSON.parse(saved);
      return new Set(favoritesArray);
    }
  } catch (e) {
    console.error('Ошибка загрузки избранного из localStorage:', e);
  }
  return new Set();
};

let state = {
  view: 'home', // home | detail | cart | favorites | booking
  activeCategory: categories[0],
  search: '',
  favorites: new Set(), // Будет загружено из localStorage
  cart: [], // Будет загружено из localStorage
  detailId: meals[0].id,
  detailQty: 0,
  detailOption: meals[0].options[0] ?? null,
  showMenu: false,
  showDiningInfo: false,
  showClearCartConfirm: false,
  showBookingSuccess: false,
  hasActiveOrder: localStorage.getItem('uni_eat_order_date') !== null, // Есть ли активный заказ (для отображения QR-кода)
  showQRCode: false,
  activeOrderDate: localStorage.getItem('uni_eat_order_date') || null, // Дата бронирования
  activeOrderTime: localStorage.getItem('uni_eat_order_time') || null, // Время бронирования
  user: {
    name: 'Пользователь', // Заглушка, будет из Telegram
    username: '@username', // Заглушка, будет из Telegram
    photo: null, // Заглушка, будет из Telegram
  },
};

// Загружаем корзину и избранное из localStorage при инициализации
state.cart = loadCartFromStorage();
state.favorites = loadFavoritesFromStorage();

const root = document.getElementById('app');

const icons = {
  heart: (filled = false) =>
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="${filled ? '#e44b6b' : 'rgba(255, 255, 255, 0.6)'}" stroke="none"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0L12 5.7l-1.1-1.1a5.5 5.5 0 1 0-7.7 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>`,
  heartNav: (filled = false) =>
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="${filled ? '#e44b6b' : 'none'}" stroke="${filled ? '#e44b6b' : '#1f4b99'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0L12 5.7l-1.1-1.1a5.5 5.5 0 1 0-7.7 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>`,
  cart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L21 6H6"></path></svg>`,
  search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f4b99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  plus: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  minus: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  back: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f4b99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`,
  home: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-6v-6H10v6H4a1 1 0 0 1-1-1z"/></svg>`,
  menu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f4b99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`,
  close: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6a7ea6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  dining: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  trash: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`,
  qrcode: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="5" height="5"></rect><rect x="16" y="3" width="5" height="5"></rect><rect x="3" y="16" width="5" height="5"></rect><line x1="7" y1="8" x2="7" y2="8"></line><line x1="16" y1="8" x2="16" y2="8"></line><line x1="7" y1="16" x2="7" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line><line x1="8" y1="12" x2="8" y2="12"></line><line x1="3" y1="12" x2="5" y2="12"></line><line x1="19" y1="12" x2="21" y2="12"></line><line x1="12" y1="3" x2="12" y2="5"></line><line x1="12" y1="19" x2="12" y2="21"></line><line x1="12" y1="8" x2="12" y2="8"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>`,
};

const formatPrice = (value) => `${value} ₽`;

// Функция для предотвращения висячих предлогов
// Функция для правильного кодирования путей к изображениям
const encodeImagePath = (path) => {
  if (!path) return path;
  // Разделяем путь на директорию и имя файла
  const parts = path.split('/');
  if (parts.length < 2) return path;
  const dir = parts[0];
  const filename = parts.slice(1).join('/'); // На случай, если в имени файла есть слеши
  // Кодируем только имя файла, директорию оставляем как есть
  return dir + '/' + encodeURIComponent(filename).replace(/%2F/g, '/');
};

const preventHangingPrepositions = (text) => {
  if (!text) return text;
  // Список предлогов, которые не должны оставаться последним словом в строке
  // Сортируем по длине (сначала длинные), чтобы "со" обрабатывалось раньше "с"
  const prepositions = ['со', 'во', 'с', 'в', 'на', 'из', 'для', 'по', 'от', 'до', 'за', 'под', 'над', 'при', 'про', 'без'];
  let result = text;
  
  prepositions.forEach(prep => {
    // Экранируем специальные символы для регулярного выражения
    const escapedPrep = prep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Заменяем: пробел + предлог + пробел + следующее слово
    // Обертываем предлог и следующее слово в span с white-space: nowrap
    const regex = new RegExp(`(\\s+)(${escapedPrep})(\\s+)(\\S+)`, 'gi');
    result = result.replace(regex, (match, space1, prepMatch, space2, nextWord) => {
      // Обертываем предлог и следующее слово в span
      return `${space1}<span style="white-space: nowrap;">${prepMatch}${space2}${nextWord}</span>`;
    });
  });
  return result;
};

const setState = (patch) => {
  // Сохраняем состояние input перед перерисовкой
  const searchInput = root.querySelector('[data-search-input]');
  let hadFocus = false;
  let selectionStart = null;
  let selectionEnd = null;
  
  if (searchInput && document.activeElement === searchInput) {
    hadFocus = true;
    selectionStart = searchInput.selectionStart;
    selectionEnd = searchInput.selectionEnd;
    // Если обновляется search, берем значение из input, а не из state
    if (patch.search === undefined && searchInput.value !== state.search) {
      patch.search = searchInput.value;
    }
  }
  
  state = { ...state, ...patch };
  render();
  
  // Восстанавливаем фокус и позицию курсора
  if (hadFocus) {
    requestAnimationFrame(() => {
      const newSearchInput = root.querySelector('[data-search-input]');
      if (newSearchInput) {
        newSearchInput.focus();
        if (selectionStart !== null && selectionEnd !== null) {
          newSearchInput.setSelectionRange(selectionStart, selectionEnd);
        }
      }
    });
  }
  
  // Обновляем кнопки Telegram после изменения состояния
  requestAnimationFrame(() => {
    updateTelegramButtons();
  });
};

const getFilteredMeals = () => {
  const hasSearch = state.search.trim().length > 0;
  
  // Фильтр только по поиску, все категории всегда показываются
  if (hasSearch) {
    return meals.filter((meal) =>
      meal.name.toLowerCase().includes(state.search.toLowerCase())
    );
  }
  
  return meals;
};

const toggleFavorite = (id) => {
  const next = new Set(state.favorites);
  next.has(id) ? next.delete(id) : next.add(id);
  state.favorites = next;
  saveFavoritesToStorage();
  setState({ favorites: next });
};

const attachQtyHandlers = (container) => {
  container.querySelectorAll('[data-inc]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const mealId = btn.dataset.inc;
      const option = btn.dataset.opt === '' ? null : btn.dataset.opt;
      const cartItem = state.cart.find(item => item.mealId === mealId && (item.option === option));
      if (cartItem) {
        setCartQty(mealId, option, cartItem.qty + 1);
        // Обновляем только элемент управления количеством
        const qtyControls = btn.closest('.qty-controls');
        if (qtyControls) {
          const updatedItem = state.cart.find(item => item.mealId === mealId && (item.option === option));
          if (updatedItem) {
            const qtyValue = qtyControls.querySelector('.qty-value');
            if (qtyValue) {
              qtyValue.textContent = updatedItem.qty;
            }
          }
        }
        // Обновляем информацию на других страницах
        if (state.view === 'cart') {
          renderCart();
        } else if (state.view === 'detail') {
          renderDetail();
        }
      }
    });
  });

  container.querySelectorAll('[data-dec]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const mealId = btn.dataset.dec;
      const option = btn.dataset.opt === '' ? null : btn.dataset.opt;
      const cartItem = state.cart.find(item => item.mealId === mealId && (item.option === option));
      if (cartItem) {
        if (cartItem.qty > 0) {
          setCartQty(mealId, option, cartItem.qty - 1);
          // Обновляем только элемент управления количеством
          const qtyControls = btn.closest('.qty-controls');
          if (qtyControls) {
            const updatedItem = state.cart.find(item => item.mealId === mealId && (item.option === option));
            if (updatedItem) {
              const qtyValue = qtyControls.querySelector('.qty-value');
              if (qtyValue) {
                qtyValue.textContent = updatedItem.qty;
              }
            } else {
              // Удаляем из корзины и возвращаем кнопку добавления
              const mealCard = btn.closest('.meal-card');
              if (mealCard) {
                const meal = meals.find(m => m.id === mealId);
                if (meal && qtyControls) {
                  qtyControls.outerHTML = `<button class="add-btn" data-add="${mealId}">${icons.plus}</button>`;
                  // Добавляем обработчик для новой кнопки
                  const newBtn = mealCard.querySelector('[data-add]');
                  if (newBtn) {
                    newBtn.addEventListener('click', (e) => {
                      e.stopPropagation();
                      addToCart(meal.id, 1, meal.options[0] ?? null);
                      const cartItem = state.cart.find(item => item.mealId === mealId && (item.option === (meal.options[0] ?? null)));
                      if (cartItem) {
                        newBtn.outerHTML = `
                          <div class="qty-controls" data-meal-id="${mealId}" data-option="${meal.options[0] ?? null}">
                            <button class="qty-btn" data-dec="${mealId}" data-opt="${meal.options[0] ?? null}">${icons.minus}</button>
                            <span class="qty-value">${cartItem.qty}</span>
                            <button class="qty-btn" data-inc="${mealId}" data-opt="${meal.options[0] ?? null}">${icons.plus}</button>
                          </div>
                        `;
                        attachQtyHandlers(mealCard);
                      }
                    });
                  }
                }
              }
            }
          }
        }
        // Обновляем информацию на других страницах
        if (state.view === 'cart') {
          renderCart();
        } else if (state.view === 'detail') {
          renderDetail();
        }
      }
    });
  });
};

const addToCart = (mealId, qty = 1, option = null) => {
  const nextCart = [...state.cart];
  const idx = nextCart.findIndex(
    (item) => item.mealId === mealId && item.option === option
  );
  if (idx >= 0) {
    nextCart[idx] = { ...nextCart[idx], qty: nextCart[idx].qty + qty };
  } else {
    nextCart.push({ mealId, qty, option });
  }
  state.cart = nextCart;
  saveCartToStorage();
  // Обновляем кнопки Telegram после изменения корзины
  requestAnimationFrame(() => {
    updateTelegramButtons();
  });
};

const setCartQty = (mealId, option, qty) => {
  const nextCart = state.cart
    .map((item) =>
      item.mealId === mealId && item.option === option ? { ...item, qty } : item
    )
    .filter((item) => item.qty > 0);
  state.cart = nextCart;
  saveCartToStorage();
  // Обновляем кнопки Telegram после изменения корзины
  requestAnimationFrame(() => {
    updateTelegramButtons();
  });
};

const renderHome = () => {
  const mealsToShow = getFilteredMeals();
  const favoritesView = state.view === 'favorites';
  const mealsList = favoritesView
    ? meals.filter((m) => state.favorites.has(m.id))
    : mealsToShow;
  
  // Группируем блюда по категориям
  const mealsByCategory = {};
  mealsList.forEach((meal) => {
    if (!mealsByCategory[meal.category]) {
      mealsByCategory[meal.category] = [];
    }
    mealsByCategory[meal.category].push(meal);
  });
  
  // Создаем карточки с заголовками категорий
  // Сортируем категории в правильном порядке (как в массиве categories, исключая "Все")
  const categoryOrder = categories.filter(cat => cat !== 'Все');
  const sortedCategories = categoryOrder.filter(cat => mealsByCategory[cat]);
  
  const cards = sortedCategories
    .map((category) => {
      const categoryMeals = mealsByCategory[category];
      const categoryCards = categoryMeals
        .map(
          (meal) => `
          <div class="meal-card" data-id="${meal.id}">
            <div class="img-wrap">
              <img src="${encodeImagePath(meal.image)}" alt="${meal.name}">
              <div class="fav" data-fav="${meal.id}">${icons.heart(
              state.favorites.has(meal.id)
            )}</div>
            </div>
            <div class="name">${preventHangingPrepositions(meal.shortName)}</div>
            <div class="price">${formatPrice(meal.price)}</div>
            ${(() => {
              const cartItem = state.cart.find(item => item.mealId === meal.id && (item.option === (meal.options[0] ?? null)));
              if (cartItem) {
                return `
                  <div class="qty-controls" data-meal-id="${meal.id}" data-option="${cartItem.option ?? ''}">
                    <button class="qty-btn" data-dec="${meal.id}" data-opt="${cartItem.option ?? ''}">${icons.minus}</button>
                    <span class="qty-value">${cartItem.qty}</span>
                    <button class="qty-btn" data-inc="${meal.id}" data-opt="${cartItem.option ?? ''}">${icons.plus}</button>
                  </div>
                `;
              }
              return `<button class="add-btn" data-add="${meal.id}">${icons.plus}</button>`;
            })()}
          </div>
        `
        )
        .join('');
      
      return `
        <div class="category-section" data-category="${category}">
          <h2 class="category-title">${category}</h2>
          <div class="grid">${categoryCards}</div>
        </div>
      `;
    })
    .join('');

  const categoriesTabs = categories
    .map(
      (cat) =>
        `<button class="tab ${cat === state.activeCategory ? 'active' : ''}" data-cat="${cat}">${cat}</button>`
    )
    .join('');

  const screenTitle = favoritesView ? 'Избранное' : 'Меню';

  root.innerHTML = `
    <div class="top-bar">
      <div class="brand">
        <svg class="logo" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 24v18c0 7.5 10 11.5 22 11.5S54 49.5 54 42V24" stroke="#1f4b99" stroke-width="4" stroke-linecap="round"/>
          <path d="M32 12c-6.5-4-14.5-4-22 0v12c7.5-4 15.5-4 22 0 6.5-4 14.5-4 22 0V12c-7.5-4-15.5-4-22 0Z" stroke="#1f4b99" stroke-width="4" stroke-linecap="round"/>
        </svg>
        <span>UNI EAT</span>
      </div>
      <div style="position:relative;">
        <button class="dining-info-btn" data-dining-info style="width:42px; height:42px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:#1f4b99; background:none; border:none; padding:0;">${icons.dining}</button>
        ${
          state.showDiningInfo
            ? `<div class="dining-info-popover">
                <div class="dining-info-content">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                    <h3 style="font-size:18px; font-weight:700; color:#1c376a; margin:0;">Главная университетская столовая</h3>
                    <button class="ghost" data-close-dining style="width:24px; height:24px; padding:0; display:flex; align-items:center; justify-content:center;">${icons.close}</button>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:12px;">
                    <div style="display:flex; align-items:center; gap:8px; color:#4b5d86;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      <span>Главный корпус, 1 этаж</span>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px; color:#4b5d86;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      <span>Пн-Пт: 8:00-20:00, Сб: 9:00-18:00, Вс: выходной</span>
                    </div>
                  </div>
                </div>
              </div>`
            : ''
        }
      </div>
    </div>

    <div class="user-section" style="background:#fff; padding:16px; border-radius:16px; margin-top:16px; margin-bottom:24px; box-shadow:0 4px 12px rgba(28, 55, 106, 0.15);">
      <div class="user-profile">
        <div class="user-avatar">
          ${state.user.photo 
            ? `<img src="${state.user.photo}" alt="${state.user.name}">`
            : `<div class="avatar-placeholder">${state.user.name.charAt(0).toUpperCase()}</div>`
          }
        </div>
        <div class="user-info">
          <div class="user-name">${state.user.name}</div>
          ${state.user.username ? `<div class="user-username">${state.user.username}</div>` : ''}
        </div>
        ${
          state.hasActiveOrder
            ? `<button class="dining-info-btn" data-show-qr style="width:42px; height:42px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:#1f4b99; background:none; border:none; padding:0; margin-left:auto;">${icons.qrcode}</button>`
            : ''
        }
      </div>
    </div>
    ${
      state.showQRCode
        ? `<div class="modal-overlay" data-close-qr-modal>
            <div class="modal-content" style="max-width:320px;">
              <h3 style="font-size:18px; font-weight:700; color:#1c376a; margin:0 0 20px 0; text-align:center;">QR-код заказа</h3>
              <div style="display:flex; justify-content:center; margin-bottom:20px;">
                <div style="width:200px; height:200px; background:#f5f7fa; border:2px solid #dce5f7; border-radius:12px; display:flex; align-items:center; justify-content:center;">
                  <div style="width:180px; height:180px; background:#fff; border:1px solid #e1e7f5; border-radius:8px; display:flex; align-items:center; justify-content:center; position:relative;">
                    <div style="width:160px; height:160px; background:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwMCIvPjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMTQwIiB5PSIyMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMjAiIHk9IjE0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iNjAiIHk9IjYwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9IiNmZmYiLz48L3N2Zz4=') center/contain no-repeat;"></div>
                  </div>
                </div>
              </div>
              ${
                state.activeOrderDate && state.activeOrderTime
                  ? `<div style="display:flex; flex-direction:column; gap:8px; margin-bottom:20px; padding:12px; background:#f5f7fa; border-radius:12px;">
                      <div style="display:flex; align-items:center; gap:8px; color:#4b5d86; font-size:14px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <span>${new Date(state.activeOrderDate).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      </div>
                      <div style="display:flex; align-items:center; gap:8px; color:#4b5d86; font-size:14px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>${state.activeOrderTime}</span>
                      </div>
                    </div>`
                  : ''
              }
              <div style="display:flex; justify-content:center;">
                <button class="primary-btn" data-close-qr style="padding:10px 20px;">Закрыть</button>
              </div>
            </div>
          </div>`
        : ''
    }

    <div class="hero">
      <h1><span class="accent">Забронируйте</span><br>свой обед заранее</h1>
    </div>

    <div class="search">
      <span class="search-icon">${icons.search}</span>
      <input type="text" placeholder="Найди свою любимую еду" value="${state.search}" data-search-input>
      ${state.search ? `<button class="clear-search" data-clear-search title="Очистить">${icons.close}</button>` : ''}
    </div>

    <div class="section-title">${screenTitle}</div>
    ${
      favoritesView
        ? ''
        : `<div class="tabs">${categoriesTabs}</div>`
    }
    ${cards || '<div class="empty">Нет блюд</div>'}

    <div class="bottom-nav">
      <button class="nav-btn ${state.view === 'home' ? 'active' : ''}" data-nav="home">${icons.home}<span>Главная</span></button>
      <button class="nav-btn ${state.view === 'cart' ? 'active' : ''}" data-nav="cart" style="position:relative;">
        ${icons.cart}
        ${getCartItemsCount() > 0 ? `<span class="cart-badge">${getCartItemsCount()}</span>` : ''}
        <span>Корзина</span>
      </button>
      <button class="nav-btn ${state.view === 'favorites' ? 'active' : ''}" data-nav="favorites">${icons.heartNav()}<span>Избранное</span></button>
    </div>
  `;

  root.querySelectorAll('[data-cat]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const category = btn.dataset.cat;
      
      // Сохраняем активный фильтр без перерисовки
      state.activeCategory = category;
      
      // Обновляем активное состояние кнопок
      root.querySelectorAll('[data-cat]').forEach((b) => {
        if (b.dataset.cat === category) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      
      // Прокрутка к категории
      if (category === 'Все') {
        // Прокручиваем к началу карточек
        const firstSection = root.querySelector('.category-section');
        if (firstSection) {
          const tabsElement = root.querySelector('.tabs');
          const tabsOffset = tabsElement ? tabsElement.offsetHeight + 20 : 0;
          const elementPosition = firstSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - tabsOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        // Прокручиваем к нужной категории
        const categorySection = root.querySelector(`[data-category="${category}"]`);
        if (categorySection) {
          const tabsElement = root.querySelector('.tabs');
          const tabsOffset = tabsElement ? tabsElement.offsetHeight + 20 : 0;
          const elementPosition = categorySection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - tabsOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    })
  );

  root.querySelectorAll('.meal-card').forEach((card) =>
    card.addEventListener('click', () => openDetail(card.dataset.id))
  );

  root.querySelectorAll('[data-add]').forEach((btn) =>
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const meal = meals.find((m) => m.id === btn.dataset.add);
      addToCart(meal.id, 1, meal.options[0] ?? null);
      // Обновляем только кнопку добавления без полной перерисовки
      const mealCard = btn.closest('.meal-card');
      if (mealCard) {
        const mealId = meal.id;
        const option = meal.options[0] ?? null;
        const cartItem = state.cart.find(item => item.mealId === mealId && (item.option === option));
        if (cartItem) {
          btn.outerHTML = `
            <div class="qty-controls" data-meal-id="${mealId}" data-option="${option}">
              <button class="qty-btn" data-dec="${mealId}" data-opt="${option}">${icons.minus}</button>
              <span class="qty-value">${cartItem.qty}</span>
              <button class="qty-btn" data-inc="${mealId}" data-opt="${option}">${icons.plus}</button>
            </div>
          `;
          // Добавляем обработчики для новых кнопок
          attachQtyHandlers(mealCard);
        }
      }
    })
  );

  // Обработчики для кнопок управления количеством
  attachQtyHandlers(root);

  root.querySelectorAll('[data-fav]').forEach((btn) =>
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const mealId = btn.dataset.fav;
      const next = new Set(state.favorites);
      const wasFavorite = next.has(mealId);
      if (wasFavorite) {
        next.delete(mealId);
      } else {
        next.add(mealId);
      }
      state.favorites = next;
      saveFavoritesToStorage();
      // Обновляем только иконку сердечка без полной перерисовки
      btn.innerHTML = icons.heart(!wasFavorite);
    })
  );


  const searchInput = root.querySelector('[data-search-input]');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      e.stopPropagation();
      const value = e.target.value;
      setState({ search: value });
    });
    searchInput.addEventListener('keydown', (e) => {
      e.stopPropagation();
    });
    searchInput.addEventListener('keyup', (e) => {
      e.stopPropagation();
    });
  }

  root.querySelector('[data-clear-search]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    setState({ search: '' });
  });

  root.querySelector('.search')?.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  root.querySelectorAll('[data-nav]').forEach((btn) =>
    btn.addEventListener('click', () => setState({ view: btn.dataset.nav }))
  );

  // Обработчик для открытия информации о столовой
  root.querySelector('[data-dining-info]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    setState({ showDiningInfo: !state.showDiningInfo });
  });

  // Обработчик для закрытия информации о столовой
  root.querySelector('[data-close-dining]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    setState({ showDiningInfo: false });
  });

  // Обработчик для показа QR-кода
  root.querySelector('[data-show-qr]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    setState({ showQRCode: true });
  });

  // Обработчик для закрытия QR-кода
  root.querySelector('[data-close-qr]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    setState({ showQRCode: false });
  });

  root.querySelector('[data-close-qr-modal]')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      setState({ showQRCode: false });
    }
  });

  // Закрытие модального окна при клике вне его
  if (state.showDiningInfo) {
    setTimeout(() => {
      const handleClickOutside = (e) => {
        const popover = root.querySelector('.dining-info-popover');
        const button = root.querySelector('[data-dining-info]');
        if (popover && !popover.contains(e.target) && !button?.contains(e.target)) {
          setState({ showDiningInfo: false });
          document.removeEventListener('click', handleClickOutside);
        }
      };
      document.addEventListener('click', handleClickOutside);
    }, 0);
  }


  // Закрепление фильтров при прокрутке
  const tabsElement = root.querySelector('.tabs');
  if (tabsElement && !tabsElement.dataset.scrollHandler) {
    tabsElement.dataset.scrollHandler = 'true';
    const firstCategorySection = root.querySelector('.category-section');
    
    // Устанавливаем начальный отступ
    if (firstCategorySection) {
      firstCategorySection.style.marginTop = '24px';
    }
    
    const tabsOffsetTop = firstCategorySection 
      ? firstCategorySection.offsetTop - tabsElement.offsetHeight - 20
      : tabsElement.offsetTop;
    
    const handleScroll = () => {
      if (window.scrollY >= tabsOffsetTop) {
        tabsElement.classList.add('fixed');
        if (firstCategorySection) {
          firstCategorySection.style.marginTop = '60px';
        }
      } else {
        tabsElement.classList.remove('fixed');
        if (firstCategorySection) {
          firstCategorySection.style.marginTop = '24px';
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Проверяем при загрузке
  }
};

const openDetail = (id) => {
  const meal = meals.find((m) => m.id === id);
  const cartItem = state.cart.find(item => item.mealId === id && (item.option === (meal.options[0] ?? null)));
  setState({
    view: 'detail',
    detailId: id,
    detailQty: cartItem ? cartItem.qty : 0,
    detailOption: meal.options[0] ?? null,
    showMenu: false,
  });
};

const renderDetail = () => {
  const meal = meals.find((m) => m.id === state.detailId) ?? meals[0];
  const total = meal.price * state.detailQty;
  root.innerHTML = `
    <div class="detail">
      <div class="top-bar">
        <div style="width:42px;"></div>
        <div style="width:42px;"></div>
      </div>

      <div class="detail-hero">
        <div style="color:#566fa2; font-weight:600; margin-bottom:6px;">${meal.category}</div>
        <div style="font-size:24px; font-weight:700; color:#1c376a; margin-bottom:14px;">${preventHangingPrepositions(meal.name)}</div>
        <div class="detail-image-wrap">
          <img src="${encodeImagePath(meal.image)}" alt="${meal.name}">
        </div>
      </div>

      <div class="card">
        <div style="color:#1f4b99; font-weight:700; font-size:20px; margin-bottom:8px;">${formatPrice(meal.price)}</div>
        <div style="color:#4b5d86; margin-bottom:12px; line-height:1.4;">${meal.description}</div>
        ${
          meal.options.length
            ? `<div class="pill-row">
                ${meal.options
                  .map(
                    (opt) =>
                      `<button class="pill ${opt === state.detailOption ? 'active' : ''}" data-option="${opt}">${opt}</button>`
                  )
                  .join('')}
              </div>`
            : ''
        }
        <div class="detail-actions">
          <button class="detail-icon-btn" data-fav>${icons.heartNav(state.favorites.has(meal.id))}</button>
          <div class="qty">
            <button data-dec>${icons.minus}</button>
            <span>${state.detailQty}</span>
            <button data-inc>${icons.plus}</button>
          </div>
          <button class="detail-icon-btn" data-nav="cart" style="position:relative;">
            ${icons.cart}
            ${getCartItemsCount() > 0 ? `<span class="cart-badge">${getCartItemsCount()}</span>` : ''}
          </button>
        </div>
      </div>
    </div>
  `;


  root.querySelectorAll('[data-option]').forEach((btn) =>
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const selectedOption = btn.dataset.option;
      state.detailOption = selectedOption;
      // Синхронизируем количество с корзиной для выбранной опции
      const cartItem = state.cart.find(item => item.mealId === meal.id && (item.option === selectedOption));
      state.detailQty = cartItem ? cartItem.qty : 0;
      // Обновляем только классы кнопок опций и количество без полной перерисовки
      root.querySelectorAll('[data-option]').forEach((optionBtn) => {
        if (optionBtn.dataset.option === selectedOption) {
          optionBtn.classList.add('active');
        } else {
          optionBtn.classList.remove('active');
        }
      });
      const qtySpan = root.querySelector('.qty span');
      if (qtySpan) {
        qtySpan.textContent = state.detailQty;
      }
    })
  );

  root.querySelector('[data-inc]')?.addEventListener('click', () => {
    state.detailQty = state.detailQty + 1;
    const qtySpan = root.querySelector('.qty span');
    if (qtySpan) {
      qtySpan.textContent = state.detailQty;
    }
    // Обновляем количество в корзине для выбранной опции
    const option = meal.options.length ? state.detailOption : null;
    const cartItem = state.cart.find(item => item.mealId === meal.id && (item.option === option));
    if (cartItem) {
      // Если блюдо с этой опцией уже в корзине, обновляем количество
      setCartQty(meal.id, option, state.detailQty);
    } else {
      // Если блюдо с этой опцией еще не в корзине, добавляем как новое блюдо
      addToCart(meal.id, state.detailQty, option);
    }
    // Обновляем информацию на других страницах
    if (state.view === 'home' || state.view === 'favorites') {
      renderHome();
    } else if (state.view === 'cart') {
      renderCart();
    }
  });
  root.querySelector('[data-dec]')?.addEventListener('click', () => {
    state.detailQty = Math.max(0, state.detailQty - 1);
    const qtySpan = root.querySelector('.qty span');
    if (qtySpan) {
      qtySpan.textContent = state.detailQty;
    }
    // Обновляем количество в корзине для выбранной опции
    const option = meal.options.length ? state.detailOption : null;
    const cartItem = state.cart.find(item => item.mealId === meal.id && (item.option === option));
    if (cartItem) {
      // Если блюдо с этой опцией уже в корзине, обновляем или удаляем количество
      if (state.detailQty > 0) {
        setCartQty(meal.id, option, state.detailQty);
      } else {
        setCartQty(meal.id, option, 0);
      }
    } else if (state.detailQty > 0) {
      // Если блюдо с этой опцией еще не в корзине, но количество больше 0, добавляем
      addToCart(meal.id, state.detailQty, option);
    }
    // Обновляем информацию на других страницах
    if (state.view === 'home' || state.view === 'favorites') {
      renderHome();
    } else if (state.view === 'cart') {
      renderCart();
    }
  });

  root.querySelector('[data-fav]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const mealId = meal.id;
    const next = new Set(state.favorites);
    const wasFavorite = next.has(mealId);
    if (wasFavorite) {
      next.delete(mealId);
    } else {
      next.add(mealId);
    }
    state.favorites = next;
    saveFavoritesToStorage();
    // Обновляем только иконку сердечка без полной перерисовки
    const favBtn = root.querySelector('[data-fav]');
    if (favBtn) {
      favBtn.innerHTML = icons.heartNav(!wasFavorite);
    }
  });
  root.querySelector('[data-nav="cart"]')?.addEventListener('click', () =>
    setState({ view: 'cart' })
  );
};

const renderCart = () => {
  const items = state.cart.map((item) => {
    const meal = meals.find((m) => m.id === item.mealId);
    return { ...item, meal };
  });
  const total = items.reduce((sum, item) => sum + item.meal.price * item.qty, 0);

  root.innerHTML = `
    <div class="top-bar">
      <div style="width:42px;"></div>
      <div class="brand" style="font-size:18px; gap:6px;">Корзина</div>
      ${
        items.length
          ? `<button class="dining-info-btn" data-clear-cart style="width:42px; height:42px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:#e44b6b; background:none; border:none; padding:0;">${icons.trash}</button>`
          : `<div style="width:42px;"></div>`
      }
    </div>
    <div style="margin-top:14px;" class="cart-list">
      ${
        items.length
          ? items
              .map(
                (item) => `
              <div class="cart-item">
                <img src="${encodeImagePath(item.meal.image)}" alt="${item.meal.name}">
                <div>
                  <div class="cart-title">${preventHangingPrepositions(item.meal.name)}</div>
                  ${item.option ? `<div style="color:#6a7ea6;">${item.option}</div>` : ''}
                  <div class="qty" style="margin-top:8px;">
                    <button data-dec="${item.meal.id}" data-opt="${item.option ?? ''}">${icons.minus}</button>
                    <span>${item.qty}</span>
                    <button data-inc="${item.meal.id}" data-opt="${item.option ?? ''}">${icons.plus}</button>
                  </div>
                </div>
                <div style="font-weight:700; color:#1f4b99;">${formatPrice(
                  item.meal.price * item.qty
                )}</div>
              </div>
            `
              )
              .join('')
          : '<div class="empty">Пока пусто. Добавьте блюда из меню.</div>'
      }
    </div>
    <div class="cart-footer">
      <div>
        <div style="color:#6a7ea6; font-weight:600;">Итого</div>
        <div style="font-size:18px; font-weight:800;">${formatPrice(total)}</div>
      </div>
      <button class="primary-btn" style="width:auto; padding:8px 12px;" data-checkout ${
        items.length ? '' : 'disabled'
      }>Оплатить / забронировать</button>
    </div>
    ${
      state.showClearCartConfirm
        ? `<div class="modal-overlay" data-close-modal>
            <div class="modal-content">
              <h3 style="font-size:18px; font-weight:700; color:#1c376a; margin:0 0 16px 0; text-align:center;">Хотите удалить всю корзину?</h3>
              <div style="display:flex; gap:12px; justify-content:center;">
                <button class="ghost" data-cancel-clear style="padding:10px 20px; color:#6a7ea6; background:#f1f3f7; border-radius:12px;">Отмена</button>
                <button class="primary-btn" data-confirm-clear style="padding:10px 20px; background:#e44b6b; color:#fff;">Удалить</button>
              </div>
            </div>
          </div>`
        : ''
    }

    <div class="bottom-nav">
      <button class="nav-btn" data-nav="home">${icons.home}<span>Главная</span></button>
      <button class="nav-btn active" data-nav="cart" style="position:relative;">
        ${icons.cart}
        ${getCartItemsCount() > 0 ? `<span class="cart-badge">${getCartItemsCount()}</span>` : ''}
        <span>Корзина</span>
      </button>
      <button class="nav-btn" data-nav="favorites">${icons.heartNav()}<span>Избранное</span></button>
    </div>
  `;


  root.querySelector('[data-clear-cart]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    setState({ showClearCartConfirm: true });
  });

  root.querySelector('[data-cancel-clear]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    setState({ showClearCartConfirm: false });
  });

  root.querySelector('[data-confirm-clear]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    clearCart();
    setState({ showClearCartConfirm: false });
    renderCart();
  });

  root.querySelector('[data-close-modal]')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      setState({ showClearCartConfirm: false });
    }
  });

  root.querySelectorAll('[data-inc]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const opt = btn.dataset.opt || null;
      const mealId = btn.dataset.inc;
      const current = state.cart.find((i) => i.mealId === mealId && (i.option ?? '') === (opt ?? ''));
      setCartQty(mealId, opt || null, (current?.qty ?? 0) + 1);
      // Обновляем информацию на всех страницах
      if (state.view === 'cart') {
        renderCart();
      } else if (state.view === 'home' || state.view === 'favorites') {
        renderHome();
      } else if (state.view === 'detail') {
        renderDetail();
      }
    })
  );
  root.querySelectorAll('[data-dec]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const opt = btn.dataset.opt || null;
      const mealId = btn.dataset.dec;
      const current = state.cart.find((i) => i.mealId === mealId && (i.option ?? '') === (opt ?? ''));
      const nextQty = Math.max(0, (current?.qty ?? 0) - 1);
      setCartQty(mealId, opt || null, nextQty);
      // Обновляем информацию на всех страницах
      if (state.view === 'cart') {
        renderCart();
      } else if (state.view === 'home' || state.view === 'favorites') {
        renderHome();
      } else if (state.view === 'detail') {
        renderDetail();
      }
    })
  );

  root.querySelectorAll('[data-nav]').forEach((btn) =>
    btn.addEventListener('click', () => setState({ view: btn.dataset.nav }))
  );

  root.querySelector('[data-checkout]')?.addEventListener('click', () => {
    if (items.length > 0) {
      setState({ view: 'booking' });
    }
  });
};

const renderFavorites = () => {
  const favoritesList = meals.filter((m) => state.favorites.has(m.id));
  
  // Группируем блюда по категориям
  const mealsByCategory = {};
  favoritesList.forEach((meal) => {
    if (!mealsByCategory[meal.category]) {
      mealsByCategory[meal.category] = [];
    }
    mealsByCategory[meal.category].push(meal);
  });
  
  // Создаем карточки с заголовками категорий
  const categoryOrder = categories.filter(cat => cat !== 'Все');
  const sortedCategories = categoryOrder.filter(cat => mealsByCategory[cat]);
  
  const cards = sortedCategories
    .map((category) => {
      const categoryMeals = mealsByCategory[category];
      const categoryCards = categoryMeals
        .map(
          (meal) => `
          <div class="meal-card" data-id="${meal.id}">
            <div class="img-wrap">
              <img src="${encodeImagePath(meal.image)}" alt="${meal.name}">
              <div class="fav" data-fav="${meal.id}">${icons.heart(
              state.favorites.has(meal.id)
            )}</div>
            </div>
            <div class="name">${preventHangingPrepositions(meal.shortName)}</div>
            <div class="price">${formatPrice(meal.price)}</div>
            ${(() => {
              const cartItem = state.cart.find(item => item.mealId === meal.id && (item.option === (meal.options[0] ?? null)));
              if (cartItem) {
                return `
                  <div class="qty-controls" data-meal-id="${meal.id}" data-option="${cartItem.option ?? ''}">
                    <button class="qty-btn" data-dec="${meal.id}" data-opt="${cartItem.option ?? ''}">${icons.minus}</button>
                    <span class="qty-value">${cartItem.qty}</span>
                    <button class="qty-btn" data-inc="${meal.id}" data-opt="${cartItem.option ?? ''}">${icons.plus}</button>
                  </div>
                `;
              }
              return `<button class="add-btn" data-add="${meal.id}">${icons.plus}</button>`;
            })()}
          </div>
        `
        )
        .join('');
      
      return `
        <div class="category-section" data-category="${category}">
          <h2 class="category-title">${category}</h2>
          <div class="grid">${categoryCards}</div>
        </div>
      `;
    })
    .join('');

  root.innerHTML = `
    <div class="top-bar">
      <div style="width:42px;"></div>
      <div class="brand" style="font-size:18px; gap:6px;">Избранное</div>
      <div style="width:42px;"></div>
    </div>
    <div style="margin-top:14px;">
      ${
        favoritesList.length
          ? cards
          : '<div class="empty">Пока нет избранных блюд. Добавьте их из меню.</div>'
      }
    </div>

    <div class="bottom-nav">
      <button class="nav-btn" data-nav="home">${icons.home}<span>Главная</span></button>
      <button class="nav-btn" data-nav="cart" style="position:relative;">
        ${icons.cart}
        ${getCartItemsCount() > 0 ? `<span class="cart-badge">${getCartItemsCount()}</span>` : ''}
        <span>Корзина</span>
      </button>
      <button class="nav-btn active" data-nav="favorites">${icons.heartNav()}<span>Избранное</span></button>
    </div>
  `;

  // Обработчики для карточек блюд
  root.querySelectorAll('.meal-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.fav') && !e.target.closest('.add-btn') && !e.target.closest('.qty-controls') && !e.target.closest('.qty-btn')) {
        openDetail(card.dataset.id);
      }
    });
  });

  // Обработчики для добавления в корзину
  root.querySelectorAll('[data-add]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const mealId = btn.dataset.add;
      const meal = meals.find((m) => m.id === mealId);
      const option = meal.options.length ? meal.options[0] : null;
      addToCart(mealId, 1, option);
      // Обновляем отображение
      renderFavorites();
    });
  });

  // Обработчики для избранного
  root.querySelectorAll('[data-fav]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(btn.dataset.fav);
      // Обновляем только иконку сердечка без полной перерисовки
      const mealId = btn.dataset.fav;
      const isFavorite = state.favorites.has(mealId);
      btn.innerHTML = icons.heart(isFavorite);
    });
  });

  // Обработчики для кнопок управления количеством
  attachQtyHandlers(root);

  root.querySelectorAll('[data-nav]').forEach((btn) =>
    btn.addEventListener('click', () => setState({ view: btn.dataset.nav }))
  );
};

const renderBooking = () => {
  const today = new Date().toISOString().split('T')[0];
  const savedBookingData = loadBookingDataFromStorage();
  
  root.innerHTML = `
    <div class="top-bar">
      <div style="width:42px;"></div>
      <div class="brand" style="font-size:18px; gap:6px;">Бронирование</div>
      <div style="width:42px;"></div>
    </div>

    <div style="margin-top:14px;">
      <div class="card" style="padding:20px;">
        <h2 style="font-size:20px; font-weight:700; color:#1c376a; margin-bottom:20px;">Бронирование еды</h2>
        
        <form id="bookingForm" style="display:flex; flex-direction:column; gap:16px;">
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="form-group" style="display:flex; flex-wrap:wrap; gap:12px; align-items:flex-start;">
              <div style="flex:1; min-width:150px; box-sizing:border-box;">
                <label style="display:block; font-weight:600; color:#1c376a; margin-bottom:8px; font-size:14px;">Дата посещения</label>
                <input type="date" id="bookingDate" name="date" required style="width:100%; padding:12px; border:1.5px solid #dce5f7; border-radius:12px; font-size:16px; color:#1c376a; background:#fff; box-sizing:border-box;" min="${today}">
              </div>
              <div style="flex:1; min-width:150px; box-sizing:border-box;">
                <label style="display:block; font-weight:600; color:#1c376a; margin-bottom:8px; font-size:14px;">Время посещения</label>
                <div style="display:flex; align-items:center; gap:12px;">
                  <input type="time" id="bookingTime" name="time" required style="flex:1; padding:12px; border:1.5px solid #dce5f7; border-radius:12px; font-size:16px; color:#1c376a; background:#fff; box-sizing:border-box; min-width:0;" value="${savedBookingData?.time || ''}">
                  <span style="font-size:12px; color:#6a7ea6; white-space:nowrap; flex-shrink:0;">± 10 минут</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="form-group">
              <label style="display:block; font-weight:600; color:#1c376a; margin-bottom:8px; font-size:14px;">Количество гостей</label>
              <div class="pill-row" style="justify-content:flex-start; margin:0;">
                <button type="button" class="pill booking-guests ${savedBookingData?.guests === '1' ? 'active' : ''}" data-guests="1">1 человек</button>
                <button type="button" class="pill booking-guests ${!savedBookingData?.guests || savedBookingData?.guests === '2' ? 'active' : ''}" data-guests="2">2 человека</button>
                <button type="button" class="pill booking-guests ${savedBookingData?.guests === '3' ? 'active' : ''}" data-guests="3">3 человека</button>
                <button type="button" class="pill booking-guests ${savedBookingData?.guests === '4' ? 'active' : ''}" data-guests="4">4 человека</button>
                <button type="button" class="pill booking-guests ${savedBookingData?.guests === '5' ? 'active' : ''}" data-guests="5">5+ человек</button>
              </div>
              <input type="hidden" id="bookingGuests" name="guests" value="${savedBookingData?.guests || '2'}" required>
            </div>
          </div>
          
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="form-group">
              <label style="display:block; font-weight:600; color:#1c376a; margin-bottom:8px; font-size:14px;">Ваше имя</label>
              <input type="text" id="bookingName" name="name" placeholder="Введите ваше имя" required style="width:100%; padding:12px; border:1.5px solid #dce5f7; border-radius:12px; font-size:16px; color:#1c376a; background:#fff;" value="${savedBookingData?.name || state.user.name}">
            </div>
            
            <div class="form-group">
              <label style="display:block; font-weight:600; color:#1c376a; margin-bottom:8px; font-size:14px;">Электронная почта</label>
              <input type="email" id="bookingEmail" name="email" placeholder="Введите вашу почту" required style="width:100%; padding:12px; border:1.5px solid #dce5f7; border-radius:12px; font-size:16px; color:#1c376a; background:#fff;" value="${savedBookingData?.email || ''}">
            </div>
          </div>
          
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div class="form-group">
              <label style="display:block; font-weight:600; color:#1c376a; margin-bottom:8px; font-size:14px;">Номер телефона</label>
              <input type="tel" id="bookingPhone" name="phone" placeholder="Введите ваш номер телефона" required style="width:100%; padding:12px; border:1.5px solid #dce5f7; border-radius:12px; font-size:16px; color:#1c376a; background:#fff;" value="${savedBookingData?.phone || ''}">
            </div>
            
            <div class="form-group">
              <label style="display:block; font-weight:600; color:#1c376a; margin-bottom:8px; font-size:14px;">Студенческий билет №</label>
              <input type="text" id="bookingStudentId" name="studentId" placeholder="Введите номер студенческого" style="width:100%; padding:12px; border:1.5px solid #dce5f7; border-radius:12px; font-size:16px; color:#1c376a; background:#fff;" value="${savedBookingData?.studentId || ''}">
            </div>
          </div>
          
          <button type="submit" class="primary-btn" style="margin-top:8px;">Подтвердить бронирование</button>
        </form>
      </div>
    </div>
    ${
      state.showBookingSuccess
        ? `<div class="modal-overlay" data-close-success-modal>
            <div class="modal-content">
              <h3 style="font-size:18px; font-weight:700; color:#1c376a; margin:0 0 16px 0; text-align:center;">Ваш заказ сформирован. QR-код появится на главной странице</h3>
              <div style="display:flex; justify-content:center;">
                <button class="primary-btn" data-close-success style="padding:10px 20px;">ОК</button>
              </div>
            </div>
          </div>`
        : ''
    }

    <div class="bottom-nav">
      <button class="nav-btn" data-nav="home">${icons.home}<span>Главная</span></button>
      <button class="nav-btn" data-nav="cart" style="position:relative;">
        ${icons.cart}
        ${getCartItemsCount() > 0 ? `<span class="cart-badge">${getCartItemsCount()}</span>` : ''}
        <span>Корзина</span>
      </button>
      <button class="nav-btn" data-nav="favorites">${icons.heartNav()}<span>Избранное</span></button>
    </div>
  `;

  // Устанавливаем сегодняшнюю дату по умолчанию
  const dateInput = root.querySelector('#bookingDate');
  if (dateInput) {
    dateInput.value = today;
  }


  // Обработчики для выбора количества гостей
  root.querySelectorAll('.booking-guests').forEach((btn) => {
    btn.addEventListener('click', () => {
      root.querySelectorAll('.booking-guests').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const guestsInput = root.querySelector('#bookingGuests');
      if (guestsInput) {
        guestsInput.value = btn.dataset.guests;
      }
    });
  });

  // Ограничение ввода только цифрами для поля номера телефона
  const phoneInput = root.querySelector('#bookingPhone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '');
    });
  }

  // Автоматическое переключение на минуты после ввода 2 цифр часов
  const timeInput = root.querySelector('#bookingTime');
  if (timeInput) {
    timeInput.addEventListener('keyup', (e) => {
      // Пропускаем служебные клавиши
      if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'Tab' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        return;
      }
      
      const value = e.target.value;
      const cursorPosition = e.target.selectionStart || 0;
      
      // Если введено 2 цифры без двоеточия
      if (value.length === 2 && /^\d{2}$/.test(value)) {
        e.target.value = value + ':';
        // Устанавливаем курсор после двоеточия
        setTimeout(() => {
          e.target.setSelectionRange(3, 3);
        }, 0);
      }
    });
    
    // Также проверяем при вводе
    timeInput.addEventListener('input', (e) => {
      const value = e.target.value;
      
      // Если введено 2 цифры без двоеточия
      if (value.length === 2 && /^\d{2}$/.test(value)) {
        e.target.value = value + ':';
        setTimeout(() => {
          e.target.setSelectionRange(3, 3);
        }, 0);
      }
    });
  }

  root.querySelector('#bookingForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    
    // Проверяем все обязательные поля
    const name = form.querySelector('#bookingName')?.value.trim();
    const email = form.querySelector('#bookingEmail')?.value.trim();
    const phone = form.querySelector('#bookingPhone')?.value.trim();
    const date = form.querySelector('#bookingDate')?.value;
    const time = form.querySelector('#bookingTime')?.value;
    const guests = form.querySelector('#bookingGuests')?.value;
    
    // Проверяем, что все поля заполнены
    if (name && email && phone && date && time && guests) {
      // Сохраняем данные бронирования в localStorage (кроме даты для автозаполнения, но сохраняем для QR-кода)
      saveBookingDataToStorage({
        name,
        email,
        phone,
        studentId: form.querySelector('#bookingStudentId')?.value.trim() || '',
        guests,
        time,
        date, // Сохраняем дату для отображения в QR-коде
      });
      
      // Показываем модальное окно успеха
      setState({ 
        showBookingSuccess: true, 
        hasActiveOrder: true,
        activeOrderDate: date,
        activeOrderTime: time
      });
      
      // Очищаем корзину после успешного бронирования
      state.cart = [];
      saveCartToStorage();
    } else {
      // Если не все поля заполнены, показываем стандартную валидацию HTML5
      form.reportValidity();
    }
  });

  root.querySelector('[data-close-success]')?.addEventListener('click', (e) => {
    e.stopPropagation();
    setState({ showBookingSuccess: false, view: 'home' });
  });

  root.querySelector('[data-close-success-modal]')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      setState({ showBookingSuccess: false, view: 'home' });
    }
  });

  root.querySelectorAll('[data-nav]').forEach((btn) =>
    btn.addEventListener('click', () => setState({ view: btn.dataset.nav }))
  );
};

// Инициализация Telegram Web App
let tg = null;
if (window.Telegram && window.Telegram.WebApp) {
  tg = window.Telegram.WebApp;
  tg.ready();
  
  // Включаем fullscreen режим
  tg.expand();
  
  // Блокируем закрытие свайпом сверху вниз
  tg.enableClosingConfirmation();
  
  // Отключаем вибрацию при нажатии (опционально)
  tg.HapticFeedback.impactOccurred = () => {};
  
  // Получаем данные пользователя из Telegram
  const user = tg.initDataUnsafe?.user;
  if (user) {
    const firstName = user.first_name || '';
    const lastName = user.last_name || '';
    const fullName = firstName + (lastName ? ' ' + lastName : '');
    
    state.user = {
      name: fullName || 'Пользователь',
      username: user.username ? '@' + user.username : '',
      photo: user.photo_url || null,
    };
  }
}

const updateTelegramButtons = () => {
  if (!tg) return;
  
  // Скрываем кнопки по умолчанию
  tg.MainButton.hide();
  tg.BackButton.hide();
  
  // Показываем BackButton на всех страницах кроме главной
  if (state.view !== 'home') {
    tg.BackButton.show();
    tg.BackButton.onClick(() => {
      if (state.view === 'detail') {
        setState({ view: 'home' });
      } else if (state.view === 'cart') {
        setState({ view: 'home' });
      } else if (state.view === 'favorites') {
        setState({ view: 'home' });
      } else if (state.view === 'booking') {
        setState({ view: 'cart' });
      }
    });
  }
};

let previousView = null;

const render = () => {
  const currentView = state.view;
  
  if (currentView === 'home') {
    renderHome();
  } else if (currentView === 'detail') {
    renderDetail();
  } else if (currentView === 'cart') {
    renderCart();
  } else if (currentView === 'favorites') {
    renderFavorites();
  } else if (currentView === 'booking') {
    renderBooking();
  }
  
  // Прокручиваем наверх только при смене страницы, а не при каждом рендере
  if (previousView !== currentView) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    previousView = currentView;
  }
  
  // Обновляем кнопки Telegram после рендеринга
  requestAnimationFrame(() => {
    updateTelegramButtons();
  });
};

// Инициализация при загрузке
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', render);
} else {
  render();
}


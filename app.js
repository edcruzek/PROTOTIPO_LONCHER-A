const screens = [
  {
    title: "Pantalla 1",
    orders: [
      {
        id: "#1042",
        name: "Juan Perez",
        status: "Pendiente",
        tone: "danger",
        time: "12:30 PM (en 15 min)",
        address: "Av. Revolucion 1234, Col. Centro",
        phone: "55 1234 5678",
        summary: "2x Menu del Dia, 1x Agua de Horchata"
      },
      {
        id: "#1041",
        name: "Maria Gonzalez",
        status: "En cocina",
        tone: "warning",
        time: "12:15 PM (hace 5 min)",
        address: "Calle Juarez 45, Col. Roma",
        phone: "55 9876 5432",
        summary: "1x Pechuga Asada, 1x Sopa de Pasta"
      },
      {
        id: "#1043",
        name: "Carlos Ruiz",
        status: "Pendiente",
        tone: "danger",
        time: "12:45 PM (en 35 min)",
        address: "Insurgentes Sur 999, Piso 4",
        phone: "55 3333 4444",
        summary: "3x Tacos Dorados, 1x Consome"
      }
    ]
  },
  {
    title: "Pantalla 2",
    orders: [
      {
        id: "#1042",
        name: "Juan Perez",
        status: "Pendiente",
        tone: "danger",
        time: "12:30 PM (en 15 min)",
        address: "Av. Revolucion 1234, Col. Centro",
        phone: "55 1234 5678",
        summary: "2x Menu del Dia, 1x Agua de Jamaica"
      },
      {
        id: "#1041",
        name: "Maria Gonzalez",
        status: "En cocina",
        tone: "warning",
        time: "12:15 PM (hace 5 min)",
        address: "Calle Juarez 45, Col. Roma",
        phone: "55 9876 5432",
        summary: "1x Pechuga Asada, 1x Sopa de Verduras"
      },
      {
        id: "#1043",
        name: "Carlos Ruiz",
        status: "Pendiente",
        tone: "danger",
        time: "12:45 PM (en 35 min)",
        address: "Insurgentes Sur 999, Piso 4",
        phone: "55 3333 4444",
        summary: "3x Tacos Dorados, 1x Consome"
      }
    ]
  },
  {
    title: "Pantalla 3",
    orders: [
      {
        id: "#1042",
        name: "Juan Perez",
        status: "Pendiente",
        tone: "danger",
        time: "12:30 PM (en 15 min)",
        address: "Av. Revolucion 1234, Col. Centro",
        phone: "55 1234 5678",
        summary: "2x Menu del Dia, 1x Agua de Horchata"
      },
      {
        id: "#1041",
        name: "Maria Gonzalez",
        status: "En cocina",
        tone: "warning",
        time: "12:15 PM (hace 5 min)",
        address: "Calle Juarez 45, Col. Roma",
        phone: "55 9876 5432",
        summary: "1x Pechuga Asada, 1x Sopa de Arroz"
      },
      {
        id: "#1043",
        name: "Carlos Ruiz",
        status: "Pendiente",
        tone: "danger",
        time: "12:45 PM (en 35 min)",
        address: "Insurgentes Sur 999, Piso 4",
        phone: "55 3333 4444",
        summary: "3x Tacos Dorados, 1x Consome"
      }
    ]
  },
  {
    title: "Pantalla 4",
    orders: [
      {
        id: "#1042",
        name: "Juan Perez",
        status: "Pendiente",
        tone: "danger",
        time: "12:30 PM (en 15 min)",
        address: "Av. Revolucion 1234, Col. Centro",
        phone: "55 1234 5678",
        summary: "2x Menu del Dia, 1x Agua de Horchata"
      },
      {
        id: "#1041",
        name: "Maria Gonzalez",
        status: "En cocina",
        tone: "warning",
        time: "12:15 PM (hace 5 min)",
        address: "Calle Juarez 45, Col. Roma",
        phone: "55 9876 5432",
        summary: "1x Pechuga Asada, 1x Sopa de Pasta"
      },
      {
        id: "#1043",
        name: "Carlos Ruiz",
        status: "Pendiente",
        tone: "danger",
        time: "12:45 PM (en 35 min)",
        address: "Insurgentes Sur 999, Piso 4",
        phone: "55 3333 4444",
        summary: "3x Tacos Dorados, 1x Consome"
      }
    ]
  }
];

const inventoryItems = [
  { name: "Pechuga de Pollo", category: "Proteinas", stock: "1.5 kg (Critico)", level: 10, tone: "critical", action: "Reordenar ahora" },
  { name: "Frijol Negro", category: "Granos y Legumbres", stock: "5 kg (Bajo)", level: 30, tone: "low", action: "Agregar a lista" },
  { name: "Arroz Blanco", category: "Granos y Legumbres", stock: "25 kg (Saludable)", level: 84, tone: "healthy", action: "Ver detalles" },
  { name: "Aceite Vegetal", category: "Alacena", stock: "12 L (Saludable)", level: 68, tone: "healthy", action: "Ver detalles" },
  { name: "Tomate Roma", category: "Verduras", stock: "0.5 kg (Critico)", level: 5, tone: "critical", action: "Reordenar ahora" }
];

const dishes = [
  {
    name: "Chilaquiles Rojos",
    price: "$85.00",
    detail: "Crujientes totopos banados en salsa roja...",
    status: "Activo",
    tone: "active",
    image: "assets/chilaquiles.png"
  },
  {
    name: "Caldo de Pollo",
    price: "$110.00",
    detail: "Consome tradicional con verduras de temporada...",
    status: "Pocas piezas",
    tone: "low",
    image: "assets/caldo-pollo.png"
  },
  {
    name: "Tacos Dorados",
    price: "$95.00",
    detail: "Orden de 4 tacos rellenos de pollo o papa...",
    status: "Agotado",
    tone: "soldout",
    image: "assets/tacos-dorados.png"
  },
  {
    name: "Enchiladas Suizas",
    price: "$120.00",
    detail: "Tortillas rellenas de pollo, banadas en salsa...",
    status: "Activo",
    tone: "active",
    image: ""
  }
];

const content = document.querySelector("#content");
const dots = document.querySelector("#screenDots");
const prev = document.querySelector("#prevScreen");
const next = document.querySelector("#nextScreen");
const searchInput = document.querySelector("#searchInput");
const navButtons = document.querySelectorAll("[data-view]");
let currentScreen = 0;
let currentView = "ordenes";
let orderFilter = "pendientes";

function titleBlock(title, subtitle, extra = "") {
  return `
    <div class="title-row">
      <div>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      ${extra}
    </div>
  `;
}

function orderTemplate(order) {
  const badgeClass = order.tone === "warning" ? "badge warning" : "badge";
  const button = order.completed
    ? `<button class="primary secondary" type="button" data-restore-order="${order.id}">Regresar</button>`
    : `<button class="primary" type="button" data-complete-order="${order.id}">Marcar lista</button>`;

  return `
    <article class="card">
      <div class="card-head">
        <div>
          <h2 class="order-id">${order.id}</h2>
          <div class="name">${order.name}</div>
        </div>
        <span class="${badgeClass}">${order.status}</span>
      </div>

      <div class="meta">
        <div class="meta-row"><span class="tiny-icon clock"></span><span>${order.time}</span></div>
        <div class="meta-row"><span class="tiny-icon pin"></span><span>${order.address}</span></div>
        <div class="meta-row"><span class="tiny-icon phone"></span><span>${order.phone}</span></div>
      </div>

      <div class="summary">
        <span>Resumen</span>
        <p>${order.summary}</p>
      </div>

      <div class="actions">
        <button type="button">Detalles</button>
        ${button}
      </div>
    </article>
  `;
}

function renderOrders() {
  const filters = `
    <div class="segmented" role="tablist" aria-label="Estado de ordenes">
      <button class="${orderFilter === "pendientes" ? "selected" : ""}" type="button" data-order-filter="pendientes">Pendientes</button>
      <button class="${orderFilter === "completadas" ? "selected" : ""}" type="button" data-order-filter="completadas">Completadas</button>
    </div>
  `;
  const visibleOrders = screens[currentScreen].orders.filter((order) => {
    return orderFilter === "completadas" ? order.completed : !order.completed;
  });
  const emptyMessage = orderFilter === "completadas"
    ? "Todavia no hay ordenes completadas."
    : "No hay ordenes pendientes en esta pantalla.";

  content.innerHTML = `
    ${titleBlock("Ordenes activas", "Administra pedidos entrantes y tickets en proceso.", filters)}
    ${
      visibleOrders.length
        ? `<div class="orders" id="orders">${visibleOrders.map(orderTemplate).join("")}</div>`
        : `<div class="empty-state compact"><h2>${emptyMessage}</h2><p>Cambia de pantalla o revisa el otro estado.</p></div>`
    }
  `;
}

function renderInventory() {
  content.innerHTML = `
    <div class="page-head">
      <div>
        <h1>Panel de Inventario</h1>
        <p>Monitoreo de stock en tiempo real y gestion de reorden.</p>
      </div>
      <button class="hero-action" type="button"><span>+</span> Agregar Ingrediente</button>
    </div>

    <div class="metric-row">
      <article class="inventory-metric">
        <span class="metric-icon box-icon"></span>
        <div><small>Total de Ingredientes</small><strong>84</strong></div>
      </article>
      <article class="inventory-metric danger">
        <span class="metric-icon alert-icon"></span>
        <div><small>Alertas Criticas</small><strong>2</strong></div>
      </article>
      <article class="inventory-metric">
        <span class="metric-icon truck-icon"></span>
        <div><small>Entregas Pendientes</small><strong>5</strong></div>
      </article>
    </div>

    <div class="pill-row">
      <button class="selected" type="button">Todos</button>
      <button type="button">Proteinas</button>
      <button type="button">Granos y Legumbres</button>
      <button type="button">Verduras</button>
      <button type="button">Lacteos</button>
    </div>

    <div class="inventory-grid">
      ${inventoryItems.map((item) => {
        const symbol = item.tone === "healthy" ? "✓" : item.tone === "low" ? "△" : "!";
        return `
          <article class="stock-card ${item.tone}">
            <div class="stock-top">
              <span class="stock-category">${item.category}</span>
              <span class="stock-signal">${symbol}</span>
            </div>
            <h2>${item.name}</h2>
            <div class="stock-line">
              <span>Nivel de Stock</span>
              <strong>${item.stock}</strong>
            </div>
            <div class="stock-track"><span style="width: ${item.level}%"></span></div>
            <button type="button">${item.action}</button>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderDishes() {
  content.innerHTML = `
    <div class="page-head">
      <div>
        <h1>Gestion de Platillos</h1>
      </div>
      <button class="hero-action" type="button"><span>+</span> Agregar Platillo</button>
    </div>

    <div class="dish-toolbar">
      <label class="inline-search">
        <span class="search-icon"></span>
        <input type="search" placeholder="Buscar platillo por nombre..." />
      </label>
      <div class="pill-row compact">
        <button class="selected" type="button">Todos</button>
        <button type="button">Desayunos</button>
        <button type="button">Comidas</button>
        <button type="button">Bebidas</button>
      </div>
    </div>

    <div class="dish-grid">
      ${dishes.map((dish) => `
        <article class="dish-card ${dish.tone}">
          <div class="dish-image ${dish.image ? "" : "missing"}" ${dish.image ? `style="background-image: url('${dish.image}')"` : ""}>
            <span class="dish-status">${dish.status}</span>
            ${dish.image ? "" : "<span class=\"missing-icon\"></span>"}
          </div>
          <div class="dish-body">
            <h2>${dish.name}</h2>
            <p>${dish.detail}</p>
            <div class="dish-bottom">
              <strong>${dish.price}</strong>
              <div class="round-actions">
                <button type="button" aria-label="Editar">✎</button>
                <button type="button" aria-label="Eliminar">⌫</button>
              </div>
            </div>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderStats() {
  content.innerHTML = `
    <div class="page-head">
      <div>
        <h1>Resumen de Analiticas</h1>
        <p>Revision de metricas de rendimiento para tu Cocina Economica.</p>
      </div>
      <div class="date-picker"><button type="button">‹</button><span>▣ Hoy, 24 Oct</span><button type="button">›</button></div>
    </div>

    <div class="analytics-grid">
      <article class="revenue-card">
        <div class="revenue-head">
          <span>Ingresos Diarios</span>
          <i>▣</i>
        </div>
        <div class="revenue-value">$14,250.00 <small>↗ +12%</small></div>
        <div class="revenue-bars">
          <span style="height: 28%"></span>
          <span style="height: 42%"></span>
          <span style="height: 35%"></span>
          <span style="height: 58%"></span>
          <span style="height: 50%"></span>
          <span class="today" style="height: 72%"></span>
        </div>
      </article>

      <div class="analytics-stack">
        <article class="small-kpi"><span>Total de Tickets</span><strong>285</strong></article>
        <article class="small-kpi"><span>Ticket Promedio</span><strong>$50.00</strong></article>
      </div>

      <article class="peak-card">
        <h2>◷ Horas Pico</h2>
        <strong>14:00 - 16:00</strong>
        <p>Mayor volumen de ordenes</p>
        <div class="hour-track"><span></span><b></b><span></span></div>
        <div class="hour-labels"><small>12pm</small><small>2pm</small><small>6pm</small></div>
      </article>

      <article class="best-dish">
        <img src="assets/enchiladas.png" alt="Enchiladas Suizas" />
        <div>
          <span>Platillo Mas Vendido</span>
          <h2>Enchiladas Suizas</h2>
          <p>Unidades Vendidas <strong>142</strong></p>
          <p>Contribucion a Ingresos <strong>$8,520.00</strong></p>
        </div>
      </article>

      <article class="category-card">
        <h2>Ventas por Categoria</h2>
        <div class="category-line"><span>Comida Corrida (Menu del Dia)</span><strong>65%</strong><i style="--w:65%; --c:#b91f0b"></i></div>
        <div class="category-line"><span>A la Carta</span><strong>25%</strong><i style="--w:25%; --c:#7d5300"></i></div>
        <div class="category-line"><span>Bebidas</span><strong>10%</strong><i style="--w:10%; --c:#16742c"></i></div>
      </article>
    </div>
  `;
}

function renderSettings() {
  content.innerHTML = `
    ${titleBlock("Ajustes", "Configuracion general del punto de venta.")}
    <div class="settings-panel">
      <label><span>Nombre del negocio</span><input value="Sazon" /></label>
      <label><span>Horario activo</span><input value="12:00 PM - 10:00 PM" /></label>
      <label><span>Telefono</span><input value="55 0000 0000" /></label>
      <button type="button" class="save-button">Guardar cambios</button>
    </div>
  `;
}

function renderLogout() {
  content.innerHTML = `
    ${titleBlock("Salir", "Confirma si deseas cerrar la sesion del sistema.")}
    <div class="empty-state">
      <h2>Sesion activa</h2>
      <p>Este prototipo no cierra una cuenta real, solo muestra el flujo visual para el cliente.</p>
      <button type="button" class="save-button" data-view-target="ordenes">Volver a ordenes</button>
    </div>
  `;
}

function renderDots() {
  dots.innerHTML = screens
    .map((screen, index) => {
      const active = index === currentScreen ? " active" : "";
      return `<button class="dot${active}" type="button" aria-label="${screen.title}" data-screen="${index}"></button>`;
    })
    .join("");
}

function updateSearchPlaceholder() {
  const labels = {
    inventario: "Buscar ingredientes...",
    ordenes: "Buscar ordenes...",
    platillos: "Buscar platillo...",
    estadisticas: "Buscar ordenes o platillos...",
    ajustes: "Buscar ajustes...",
    salir: "Buscar..."
  };
  searchInput.placeholder = labels[currentView];
}

function updateNav() {
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === currentView);
  });
}

function render() {
  const renderers = {
    inventario: renderInventory,
    ordenes: renderOrders,
    platillos: renderDishes,
    estadisticas: renderStats,
    ajustes: renderSettings,
    salir: renderLogout
  };
  renderers[currentView]();
  renderDots();
  updateNav();
  updateSearchPlaceholder();
  document.querySelector(".prototype-shell").dataset.view = currentView;
}

function setView(view) {
  currentView = view;
  render();
}

function goTo(index) {
  currentScreen = (index + screens.length) % screens.length;
  currentView = "ordenes";
  render();
}

function updateOrderStatus(orderId, completed) {
  const order = screens[currentScreen].orders.find((item) => item.id === orderId);
  if (!order) return;
  order.completed = completed;
  order.status = completed ? "Completada" : "Pendiente";
  order.tone = completed ? "warning" : "danger";
  if (completed) orderFilter = "completadas";
  render();
}

prev.addEventListener("click", () => goTo(currentScreen - 1));
next.addEventListener("click", () => goTo(currentScreen + 1));

dots.addEventListener("click", (event) => {
  const target = event.target.closest("[data-screen]");
  if (target) goTo(Number(target.dataset.screen));
});

content.addEventListener("click", (event) => {
  const completeButton = event.target.closest("[data-complete-order]");
  if (completeButton) {
    updateOrderStatus(completeButton.dataset.completeOrder, true);
    return;
  }

  const restoreButton = event.target.closest("[data-restore-order]");
  if (restoreButton) {
    updateOrderStatus(restoreButton.dataset.restoreOrder, false);
    return;
  }

  const filterButton = event.target.closest("[data-order-filter]");
  if (filterButton) {
    orderFilter = filterButton.dataset.orderFilter;
    render();
    return;
  }

  const viewTarget = event.target.closest("[data-view-target]");
  if (viewTarget) setView(viewTarget.dataset.viewTarget);
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

render();

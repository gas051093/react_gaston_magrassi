# 🛍️ Proyecto Final E-Commerce - Coderhouse

Este proyecto es una tienda online desarrollada con **React JS**, como entrega final del curso de React en **Coderhouse**. Permite navegar productos, agregarlos al carrito y realizar una compra, que queda registrada en Firebase.

---

## ⚙️ Tecnologías utilizadas

- ⚛️ React JS
- 🔥 Firebase (Firestore)
- 🧠 Context API (manejo global del carrito)
- 🧼 SweetAlert2 para feedback visual
- 🧭 React Router DOM
- 🎨 Bootstrap + Sass

---

## 📁 Estructura del proyecto

```
src/
├── App.jsx
├── main.jsx
├── index.scss
├── components/
│   ├── CartItem/
│   ├── CartList/
│   ├── Checkout/
│   ├── Item/
│   ├── ItemCount/
│   ├── ItemDetail/
│   ├── ItemList/
│   ├── NavBar/
│   ├── CartWidget.jsx
│   ├── ContainerCartList.jsx
│   ├── ContainerItemDetail.jsx
│   ├── ContainerItemList.jsx
│   └── EmptyCart.jsx
├── Context/
│   └── CartContext.jsx
├── firebase/
│   └── db.js
├── Helpers/
│   └── (funciones auxiliares)
└── hoc/
    └── (Higher Order Components)
```

---

## 🛒 Funcionalidades implementadas

- ✅ Listado de productos (ItemList)
- ✅ Vista de detalle (ItemDetail)
- ✅ Agregar productos al carrito (ItemCount + CartContext)
- ✅ Visualización del carrito completo (CartList)
- ✅ Checkout con formulario validado (Checkout)
- ✅ Guardado de órdenes en Firestore (con `serverTimestamp`)
- ✅ Alertas con feedback de estado (SweetAlert2)
- ✅ Estilos responsivos con Bootstrap y Sass

---

## 🧠 Lógica del Checkout

El componente `Checkout`:
- Valida que el carrito no esté vacío
- Pide nombre, email y teléfono
- Envia la orden a Firestore
- Muestra el ID de compra
- Limpia el carrito y redirige al home



---

## 🧪 Cómo ejecutar este proyecto

1. Cloná el repositorio:
```bash
git clone https://github.com/gas051093/react_gaston_magrassi.git
cd miapp_react
```

2. Instalá las dependencias:
```bash
npm install
```

``

3. Iniciá el servidor de desarrollo:
```bash
npm run dev
```

---

## 🔥 Firebase

En el archivo `firebase/db.js` está configurada la conexión a Firestore.

---

## 👨‍💻 Desarrollador

Proyecto desarrollado por **Gastón Magrassi** como entrega final del curso de React JS en [Coderhouse](https://www.coderhouse.com).

📧 contacto: [gastonmagrassi@gmail.com]  
🔗 [linkedin.com/in/gaston-magrassi-56236066] 

---

## ✅ Estado del proyecto

- Deploy: [https://csistemas-shop.netlify.app/](https://csistemas-shop.netlify.app/)
- Proyecto funcional
- Estructura escalable
- Próximas mejoras:
  - Admin panel para cargar productos
  - Login de usuarios

---
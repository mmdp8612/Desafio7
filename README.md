## Información sobre el Desafio 6

Se incluyo funcionalidad de login y registro de usuarios, los mismos son necesarios para acceder a las secciones de Productos, 
Perfil y Carrito. Para ello se utilizo el paquete "express-session", ademas se agrego el modelo User para persistir la informacion de cada usuario que se registre.

Las rutas agregadas en este desafio son las siguientes: 

- **GET**      http://localhost:8080/view/login
- **GET**      http://localhost:8080/view/register
- **GET**      http://localhost:8080/view/logout
- **GET**      http://localhost:8080/view/profile
- **POST**     http://localhost:8080/api/auth/register
- **POST**     http://localhost:8080/api/auth/login

A continuación, se detallan los endpoints de la API:

- **POST**     http://localhost:8080/api/cart
- **GET**      http://localhost:8080/api/cart/:cid
- **POST**     http://localhost:8080/api/cart/:cid/:pid
- **DELETE**   http://localhost:8080/api/cart/:cid/:pid
- **DELETE**   http://localhost:8080/api/cart/:cid
- **PUT**      http://localhost:8080/api/cart/:cid/:pid

```json
{
	"quantity": 4
}
```

- **PUT**      http://localhost:8080/api/cart/:cid   

```json 
[
	{ "_id": "6513307d03d6bf40717b4a31", "quantity": 7 },
	{ "_id": "6513305003d6bf40717b4a2d", "quantity": 6 },
	{ "_id": "6513306803d6bf40717b4a2f", "quantity": 5 }
]
```

### Endpoint para administrar los productos:

- **POST**     http://localhost:8080/api/products
- **GET**      http://localhost:8080/api/products
- **GET**      http://localhost:8080/api/products/:id
- **PUT**      http://localhost:8080/api/products/:id
- **DELETE**   http://localhost:8080/api/products/:id

Para los casos de POST y PUT, se necesita pasar los datos en formato JSON en el body de la solicitud. A continuación, se muestra una estructura de ejemplo:

```json
{
  "title": "Test",
  "description": "Test",
  "price": 100,
  "code": "ABC001",
  "stock": 1,
  "status": true,
  "thumbnail": "url imagen"
}
```

### URL de las diferentes vistas

- **GET**      http://localhost:8080/view/products
- **GET**      http://localhost:8080/view/products/:pid
- **GET**      http://localhost:8080/view/cart/:cid
- **GET**      http://localhost:8080/view/realtimeproducts
- **GET**      http://localhost:8080/view/chat

### Algunas aclaraciones

En la vista de products deje la posibilidad de agregar al carrito los productos, al darle agregar al carrito va a solicitar 
el CID correspondiente al carrito, luego con la url cart/:cid se pueden ver los productos agregados, ademas deje la posibilidad 
de paginar.
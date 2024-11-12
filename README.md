# Noviembre 13 🎂 - 19

Esta semana nos centraremos en entender y asimilar el uso de la [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), junto con varios [métodos fundamentales](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array) para trabajar con arreglos. Para ello, un cliente nos ha contactado para desarrollar una nueva red social de citas para amantes de pugs, y nos ha enviado el siguiente diseño con estas notas para lograr un mejor resultado:

Este es el diseño que debemos lograr, creado por el diseñador GPT Hablador.
![image](https://github.com/user-attachments/assets/e53c7999-781b-4fc6-92c8-991f4ef6fd9d)

> [!NOTE]  
> No es necesario realizar tests unitarios, ya que el ejercicio es extenso. En el futuro, esto podría mejorarse.

# Indicaciones
🟡 Cambiar la imagen del "humano apestoso" por la del gran fundador, un pug.

🔴 En los recuadros rojos, agregar 3 botones con la siguiente funcionalidad:
   - Un botón con un corazón para filtrar usuarios marcados como "favoritos".
   - Un botón para filtrar solo a *mujeres*.
   - Un botón para filtrar solo a *hombres*.

🟢 Incluir un reloj que muestre la hora actual, junto con un ícono que indique si es mañana, tarde o noche.

🔵 En la esquina superior derecha, agregar una "x" para eliminar usuarios. Abajo de cada tarjeta, mostrar el primer nombre y apellido.

Para desarrollar el proyecto utilizaremos [ViteJS](https://vite.dev/) y será en Vanilla JS.

Crear un mínimo de 3 funciones con tareas específicas:
- `getUsers` - Obtiene la información de los usuarios.
- `formatUsers` - Limpia la información de los usuarios:
   ```js
   // Entrada de la función
   [{
      "gender": "female",
      "name": {
          "title": "Miss",
          "first": "Shambhavi",
          "last": "Belligatti"
      },
      "location": {...},
      "email": "shambhavi.belligatti@example.com",
      "login": {...},
      "dob": {...},
      "phone": "7810551741",
      "cell": "8141236473",
      "id": {
          "name": "UIDAI",
          "value": "612064128789"
      },
      "picture": {
          "large": "...",
          "medium": "...",
          "thumbnail": "..."
      },
      "nat": "IN"
   }]

   // Salida esperada
   [{
      id: // id.value,
      gender,
      fullName: // name.first + " " + name.last
      picture: // picture.medium
   }]
   ```

- `getByGender` - Filtra por género según el parámetro recibido.
- `drawUsers` - Dibuja en pantalla los usuarios.
- `deleteUser` - Elimina un usuario.

Los datos se obtienen de:
```text
https://randomuser.me/api/?results=5
```

## Material de apoyo

### Lecturas importantes
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

### Asincronismo
- https://www.youtube.com/watch?v=FJ-w0tf3d_w
- https://www.youtube.com/watch?v=9j1dZwFEJ-c
- https://www.youtube.com/watch?v=Q3HtXuDEy5s
- https://www.youtube.com/watch?v=PNr8-JDMinU

### Métodos de array
- https://www.youtube.com/watch?v=DC471a9qrU4
- https://www.youtube.com/watch?v=FMubfnVET74
- https://www.youtube.com/watch?v=GGOo-Ww0TSw

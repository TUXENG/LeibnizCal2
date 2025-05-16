# LeibnizCal2

**LeibnizCal2** es una aplicación web desarrollada con **FastAPI** que permite resolver integrales definidas e indefinidas. Su diseño modular, con una interfaz intuitiva basada en HTML, CSS y JavaScript, facilita tanto el uso por parte de los usuarios como su mantenimiento por parte de desarrolladores.

## ✨ Características

- ✅ Resolución de integrales **definidas** e **indefinidas** usando SymPy.
- ✅ Historial de operaciones con visualización detallada.
- ✅ Visualización matemática con **MathJax**.
- ✅ Frontend personalizado con HTML, CSS y JavaScript.
- ✅ Backend modular usando FastAPI con rutas limpias y servicios separados.
- ✅ Interfaz amigable para estudiantes y docentes de cálculo.

## 🧱 Estructura del Proyecto

```text
LeibnizCal2/
├── src/
│   ├── api/
│   │   ├── defined/
│   │   │   ├── router.py
│   │   │   └── service.py
│   │   ├── undefined/
│   │   │   ├── router.py
│   │   │   └── service.py
│   └── modules/
│       └── common/
│           ├── config.py
│           ├── constants.py
│           ├── schemas.py
│           ├── sympytools.py
│           └── utils.py
│   └── main.py
├── templates/
│   ├── base.html
│   ├── defined.html
│   ├── undefined.html
│   └── history.html
├── static/
│   ├── css/
│   │   └── history.css
│   ├── js/
│   └── img/
│       └── pensando.png
├── tests/
│   └── test_defined.py
├── requirements.txt
├── alembic.ini
├── pytest.ini
└── README.md
````

## 🚀 Instalación y Ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/TUXENG/LeibnizCal2.git
cd LeibnizCal2
```

### 2. Crea un entorno virtual

```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

### 3. Instala dependencias

```bash
pip install -r requirements.txt
```

### 4. Ejecuta el servidor

```bash
uvicorn src.main:app --reload
```

### 5. Abre el navegador

Visita [http://127.0.0.1:8000](http://127.0.0.1:8000)

## 🧪 Pruebas

Ejecuta las pruebas con:

```bash
pytest
```

## 📸 Capturas de Pantalla

*Pendiente de agregar.*

## 🤝 Contribuciones

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature-nombre`).
3. Realiza tus cambios y haz commit.
4. Haz push a tu rama (`git push origin feature-nombre`).
5. Abre un pull request.

## 📜 Licencia

MIT License

Copyright (c) 2025 TUXENG

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.

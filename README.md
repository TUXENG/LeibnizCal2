# LeibnizCal2

**LeibnizCal2** es una aplicación web desarrollada con **FastAPI** que permite resolver integrales definidas e indefinidas. Su diseño modular, con una interfaz intuitiva basada en HTML, CSS y JavaScript, facilita tanto el uso por parte de los usuarios como su mantenimiento por parte de desarrolladores.

## ✨ Características

- ✅ Resolución de integrales **definidas** e **indefinidas** usando SymPy.
- ✅ Historial de operaciones con visualización detallada.
- ✅ Visualización matemática con **MathJax**.
- ✅ Frontend personalizado con HTML, CSS y JavaScript.
- ✅ Backend modular usando FastAPI con rutas limpias y servicios separados.
- ✅ Interfaz amigable para estudiantes y docentes de cálculo.


## 🚀 Instalación y Ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/---/LeibnizCal2.git
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

## 🧱 Estructura del Proyecto

```text
LeibnizCal2/
├── alembic
│   ├── env.py
│   ├── README
│   ├── script.py.mako
│   └── versions
├── alembic.ini
├── db.sqlite3
├── pytest.ini
├── README.md
├── requirements.txt
├── src
│   ├── api
│   │   ├── defined
│   │   │   ├── __pycache__
│   │   │   │   ├── router.cpython-312.pyc
│   │   │   │   └── service.cpython-312.pyc
│   │   │   ├── router.py
│   │   │   └── service.py
│   │   ├── dependencies.py
│   │   ├── history
│   │   │   ├── __pycache__
│   │   │   │   ├── router.cpython-312.pyc
│   │   │   │   └── service.cpython-312.pyc
│   │   │   ├── router.py
│   │   │   └── service.py
│   │   ├── index
│   │   │   ├── __pycache__
│   │   │   │   └── router.cpython-312.pyc
│   │   │   ├── router.py
│   │   │   └── service.py
│   │   ├── latex
│   │   │   ├── __pycache__
│   │   │   │   └── router.cpython-312.pyc
│   │   │   ├── router.py
│   │   │   └── service.py
│   │   ├── modules
│   │   │   └── common
│   │   │       ├── config.py
│   │   │       ├── constants.py
│   │   │       ├── __pycache__
│   │   │       │   ├── config.cpython-312.pyc
│   │   │       │   ├── schemas.cpython-312.pyc
│   │   │       │   └── sympytools.cpython-312.pyc
│   │   │       ├── schemas.py
│   │   │       ├── sympytools.py
│   │   │       └── utils.py
│   │   ├── __pycache__
│   │   │   ├── dependencies.cpython-312.pyc
│   │   │   └── router.cpython-312.pyc
│   │   ├── router.py
│   │   └── undefined
│   │       ├── __pycache__
│   │       │   ├── router.cpython-312.pyc
│   │       │   └── service.cpython-312.pyc
│   │       ├── router.py
│   │       └── service.py
│   ├── db
│   │   ├── database.py
│   │   ├── migrations
│   │   │   ├── env.py
│   │   │   ├── __pycache__
│   │   │   │   └── env.cpython-312.pyc
│   │   │   ├── README
│   │   │   ├── script.py.mako
│   │   │   └── versions
│   │   │       ├── 3b316793e520_initial_migration.py
│   │   │       └── __pycache__
│   │   │           └── 3b316793e520_initial_migration.cpython-312.pyc
│   │   ├── migrations.py
│   │   └── __pycache__
│   │       └── database.cpython-312.pyc
│   ├── main.py
│   ├── models
│   │   ├── history.py
│   │   ├── __init__.py
│   │   └── __pycache__
│   │       ├── history.cpython-312.pyc
│   │       └── __init__.cpython-312.pyc
│   ├── __pycache__
│   │   ├── main.cpython-312.pyc
│   │   └── main.cpython-313.pyc
│   └── utils
│       └── general.py
├── static
│   ├── css
│   │   ├── defined.css
│   │   ├── history.css
│   │   ├── index.css
│   │   ├── styles.css
│   │   └── undefined.css
│   ├── img
│   │   ├── leibniz.ico
│   │   ├── leibniz.png
│   │   └── pensando.png
│   └── js
│       ├── defined.js
│       ├── history.js
│       ├── toLatex.js
│       └── undefined.js
├── templates
│   ├── base.html
│   ├── defined.html
│   ├── history.html
│   ├── index.html
│   └── undefined.html
└── tests
    ├── conftest.py
    ├── test_defined.py
    ├── test_history.py
    ├── test_index.py
    └── test_undefined.py
````

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

Copyright (c) 2025 ---

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

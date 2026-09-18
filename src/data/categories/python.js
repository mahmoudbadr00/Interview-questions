// data/categories/python.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate } = DIFFICULTY;

export const python = [
  {
    id: 'python-1-what-is-python',
    difficulty: beginner,
    question: {
      ar: 'ما هو Python؟',
      en: 'What is Python?',
    },
    answer: {
      ar: 'Python هي لغة برمجة عالية المستوى تُستخدم في تطوير التطبيقات، تحليل البيانات، تعلم الآلة، وغيرها.',
      en: 'Python is a high-level, interpreted, dynamically typed language used for web development, data analysis, machine learning, automation and scripting. Its design priority is readability, which is why indentation is part of the syntax rather than a convention. Its breadth of libraries — particularly in data science and AI — is the main reason for its dominance in those fields.',
    },
  },
  {
    id: 'python-2-what-are-the-advantages',
    difficulty: beginner,
    question: {
      ar: 'ما هي مميزات Python؟',
      en: 'What are the advantages of Python?',
    },
    answer: {
      ar: 'من مميزات Python سهولة القراءة، مكتبات واسعة، دعم البرمجة الكائنية، وقابلية التشغيل عبر المنصات.',
      en: 'Readable syntax that reads close to pseudocode, an enormous standard library plus ecosystem, full object-oriented and functional support, cross-platform portability, and very fast development speed.\n\nThe honest trade-offs: it is slower than compiled languages, the GIL limits CPU-bound threading, and dynamic typing shifts some errors to runtime — which is why type hints and mypy have become standard practice on larger codebases.',
    },
  },
  {
    id: 'python-3-how-do-you-define',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكن تعريف دالة في Python؟',
      en: 'How do you define a function in Python?',
    },
    answer: {
      ar: 'يمكن تعريف دالة باستخدام الكلمة المفتاحية `def`، مثل: `def my_function():`.',
      en: 'With the def keyword:\n\n```python\ndef calculate_total(items: list[dict], tax_rate: float = 0.14) -> float:\n    """Return the total price including tax."""\n    subtotal = sum(item["price"] for item in items)\n    return subtotal * (1 + tax_rate)\n```\n\nPython supports default arguments, keyword arguments, *args and **kwargs, and type hints. One classic trap: never use a mutable default such as `def f(items=[])` — the list is created once and shared across every call. Use `None` and create the list inside instead.',
    },
  },
  {
    id: 'python-4-what-are-lists-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم القوائم (Lists) في Python؟',
      en: 'What are lists in Python?',
    },
    answer: {
      ar: 'القوائم هي هياكل بيانات تُستخدم لتخزين مجموعة من العناصر، ويمكن أن تحتوي على أنواع مختلفة.',
      en: 'Lists are ordered, mutable sequences that can hold items of any type:\n\n```python\nitems = [1, "two", 3.0]\nitems.append(4)\nitems[0] = 10\nsubset = items[1:3]        # slicing\n```\n\nThey are the default collection in Python. Worth knowing: appending is O(1) amortised but inserting at the front is O(n) — use collections.deque when you need efficient operations at both ends.',
    },
  },
  {
    id: 'python-5-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما هو الفرق بين `list` و `tuple` في Python؟',
      en: 'What is the difference between a list and a tuple in Python?',
    },
    answer: {
      ar: 'القوائم (`list`) قابلة للتغيير، بينما الـ `tuple` غير قابلة للتغيير.',
      en: 'A list is mutable; a tuple is immutable. That difference has consequences beyond syntax:\n• A tuple can be used as a dictionary key or set member, a list cannot, because it is hashable.\n• Tuples are slightly faster and use less memory.\n• Immutability signals intent: a tuple says "this is a fixed record", a list says "this collection will change".\n\nTuples are also what multiple return values are: `return x, y` returns a tuple. For a named, readable version, NamedTuple or a dataclass reads much better than positional tuples.',
    },
  },
  {
    id: 'python-6-how-do-you-import',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استيراد مكتبة في Python؟',
      en: 'How do you import a library in Python?',
    },
    answer: {
      ar: 'يمكن استيراد مكتبة باستخدام الكلمة المفتاحية `import`، مثل: `import math`.',
      en: '```python\nimport math\nimport numpy as np                  # with an alias\nfrom datetime import datetime       # a specific name\nfrom pathlib import Path\n```\n\nTwo practices worth stating: avoid `from module import *`, which pollutes the namespace and makes it impossible to tell where a name came from; and be careful with circular imports, which usually indicate that two modules should share a third.',
    },
  },
  {
    id: 'python-7-how-do-you-handle',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التعامل مع الاستثناءات في Python؟',
      en: 'How do you handle exceptions in Python?',
    },
    answer: {
      ar: 'يمكن التعامل مع الاستثناءات باستخدام الكتل `try-except`.',
      en: '```python\ntry:\n    data = json.loads(raw)\nexcept json.JSONDecodeError as e:\n    logger.error("invalid payload: %s", e)\n    raise ValueError("Malformed input") from e\nelse:\n    process(data)          # runs only if no exception occurred\nfinally:\n    cleanup()              # always runs\n```\n\nPython\'s philosophy here is "easier to ask forgiveness than permission": trying an operation and catching the failure is often more idiomatic than checking conditions first.\n\nTwo rules: catch specific exceptions rather than bare `except:`, which also swallows KeyboardInterrupt; and use `raise ... from e` so the original cause is preserved in the traceback.',
    },
  },
  {
    id: 'python-8-what-are-dictionaries-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم القواميس (Dictionaries) في Python؟',
      en: 'What are dictionaries in Python?',
    },
    answer: {
      ar: 'القواميس هي هياكل بيانات تُستخدم لتخزين أزواج المفتاح-القيمة.',
      en: 'Dictionaries store key/value pairs with O(1) average lookup, and since Python 3.7 they preserve insertion order:\n\n```python\nuser = {"id": 1, "name": "Sara"}\nuser.get("email", "unknown")       # a safe default instead of KeyError\nfor key, value in user.items(): ...\nmerged = {**defaults, **overrides}\n```\n\nKeys must be hashable, which is why tuples work as keys and lists do not. For counting and grouping, collections.Counter and defaultdict save a lot of boilerplate.',
    },
  },
  {
    id: 'python-9-how-do-you-read',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك قراءة ملف في Python؟',
      en: 'How do you read a file in Python?',
    },
    answer: {
      ar: 'يمكن استخدام الدالة `open()` لقراءة الملفات، مثل: `with open(\'file.txt\') as f:`.',
      en: '```python\nfrom pathlib import Path\n\nwith open("data.txt", encoding="utf-8") as f:\n    content = f.read()\n\nwith open("data.txt", encoding="utf-8") as f:\n    for line in f:                  # memory-efficient for large files\n        process(line)\n\ncontent = Path("data.txt").read_text(encoding="utf-8")   # the modern shorthand\n```\n\nAlways use the `with` statement so the file is closed even if an exception occurs, and always pass an explicit encoding — relying on the platform default is a classic source of bugs when code moves between machines.',
    },
  },
  {
    id: 'python-10-how-does-object-oriented',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ OOP في Python؟',
      en: 'How does object-oriented programming work in Python?',
    },
    answer: {
      ar: 'البرمجة الكائنية (OOP) تسمح بإنشاء كائنات يمكن أن تحتوي على بيانات وسلوكيات.',
      en: '```python\nfrom dataclasses import dataclass\n\n@dataclass\nclass User:\n    id: int\n    name: str\n    email: str | None = None\n\n    def display_name(self) -> str:\n        return self.name.title()\n```\n\nPython supports classes, inheritance (including multiple inheritance, resolved by the MRO), properties, class and static methods, and dunder methods such as __str__ and __eq__ for operator behaviour.\n\nThere is no true private visibility — a leading underscore is a convention, and a double underscore only triggers name mangling. Python relies on agreement rather than enforcement. For plain data containers, @dataclass removes a great deal of boilerplate.',
    },
  },
  {
    id: 'python-11-how-do-you-install',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام المكتبات الخارجية في Python؟',
      en: 'How do you install and use external libraries in Python?',
    },
    answer: {
      ar: 'يمكن استخدام `pip` لتثبيت المكتبات الخارجية، مثل: `pip install requests`.',
      en: 'With pip, inside a virtual environment:\n\n```bash\npython -m venv .venv\nsource .venv/bin/activate        # Windows: .venv\\Scripts\\activate\npip install requests\npip freeze > requirements.txt\n```\n\nThe virtual environment is not optional in practice: installing globally causes version conflicts between projects. Modern alternatives such as Poetry and uv handle environments and dependency resolution together and produce a lockfile, which pip alone does not.',
    },
  },
  {
    id: 'python-12-what-are-lambda-functions',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الدوال المجهولة (Lambda functions) في Python؟',
      en: 'What are lambda functions in Python?',
    },
    answer: {
      ar: 'Lambda functions هي دوال صغيرة غير مسماة تُستخدم لإنشاء دوال بسيطة بسرعة.',
      en: 'Lambdas are small anonymous functions limited to a single expression:\n\n```python\nsorted(users, key=lambda u: u.age)\nlist(filter(lambda x: x > 10, numbers))\n```\n\nThey are useful as a short key or predicate passed to another function. Beyond that, a named def is clearer — and the Python style guide explicitly advises against assigning a lambda to a name, since `def` gives you the same thing with a useful name in tracebacks.',
    },
  },
  {
    id: 'python-13-what-are-list-comprehensions',
    difficulty: beginner,
    question: {
      ar: 'ما هي الـ List Comprehensions في Python؟',
      en: 'What are list comprehensions in Python?',
    },
    answer: {
      ar: 'List Comprehensions هي طريقة مختصرة لإنشاء القوائم باستخدام تعبيرات بسيطة.',
      en: 'A concise way to build a list from an iterable:\n\n```python\nsquares = [x ** 2 for x in range(10)]\nactive = [u.name for u in users if u.is_active]\nby_id = {u.id: u for u in users}                 # dict comprehension\nunique = {u.country for u in users}              # set comprehension\nlazy = (x ** 2 for x in range(1_000_000))        # generator expression\n```\n\nThey are more idiomatic and usually faster than an explicit append loop. The caveat is readability: a comprehension with two conditions and nested loops is harder to read than the loop it replaced. And for very large data, a generator expression avoids materialising everything in memory.',
    },
  },
  {
    id: 'python-14-how-do-you-manage',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك إدارة البيئة الافتراضية في Python؟',
      en: 'How do you manage virtual environments in Python?',
    },
    answer: {
      ar: 'يمكن استخدام `venv` لإنشاء وإدارة البيئات الافتراضية.',
      en: 'With the built-in venv module:\n\n```bash\npython -m venv .venv\nsource .venv/bin/activate\ndeactivate\n```\n\nEach project gets its own isolated set of dependencies, so two projects can use different versions of the same library without conflict. Add .venv to .gitignore and commit requirements.txt (or pyproject.toml) instead. Tools such as Poetry, pipenv and uv build on this with proper dependency resolution and lockfiles.',
    },
  },
  {
    id: 'python-15-what-are-modules-and',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Modules في Python؟',
      en: 'What are modules and packages in Python?',
    },
    answer: {
      ar: 'Modules هي ملفات تحتوي على دوال وبيانات يمكن استخدامها في برامج أخرى.',
      en: 'A module is a single .py file containing functions, classes and variables that other code can import. A package is a directory of modules, historically marked by an __init__.py file.\n\n```python\nfrom myapp.services.billing import calculate_invoice\n```\n\nEvery module runs once on first import and is then cached in sys.modules. The `if __name__ == "__main__":` guard is what lets a file be both importable and directly runnable, without the script code executing on import.',
    },
  },
  {
    id: 'python-16-how-do-you-work',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التعامل مع التاريخ والوقت في Python؟',
      en: 'How do you work with dates and times in Python?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة `datetime` للتعامل مع التاريخ والوقت.',
      en: '```python\nfrom datetime import datetime, timedelta, timezone\n\nnow = datetime.now(timezone.utc)          # timezone-aware\ntomorrow = now + timedelta(days=1)\nformatted = now.strftime("%Y-%m-%d %H:%M")\nparsed = datetime.fromisoformat("2024-01-15T10:30:00+00:00")\n```\n\nThe most important practice is to work with timezone-aware datetimes. A naive datetime carries no timezone, and mixing naive and aware values raises errors or silently produces wrong results. Store and compute in UTC, and convert to a local zone only for display — zoneinfo in the standard library handles that.',
    },
  },
  {
    id: 'python-17-what-are-generators-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Generators في Python؟',
      en: 'What are generators in Python?',
    },
    answer: {
      ar: 'Generators هي دوال تُستخدم لإنشاء متواليات قابلة للتكرار بشكل ديناميكي.',
      en: 'Generators produce values lazily, one at a time, instead of building an entire sequence in memory:\n\n```python\ndef read_large_file(path):\n    with open(path, encoding="utf-8") as f:\n        for line in f:\n            yield line.strip()\n\nfor line in read_large_file("10gb.log"):\n    process(line)          # constant memory regardless of file size\n```\n\nCalling a generator function does not run it — it returns an iterator, and each `next()` runs until the following yield while preserving all local state.\n\nThey are the right tool for large or infinite sequences, streaming pipelines, and anywhere a full list would be wasteful. The trade-off is that they can only be consumed once.',
    },
  },
  {
    id: 'python-18-how-do-you-use',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام الدوال الأساسية في Python؟',
      en: 'How do you use map, filter and reduce in Python?',
    },
    answer: {
      ar: 'يمكن استخدام دوال مثل `map()`, `filter()`, و`reduce()` لمعالجة البيانات.',
      en: '```python\nsquares = map(lambda x: x ** 2, numbers)\nadults = filter(lambda u: u.age >= 18, users)\n\nfrom functools import reduce\ntotal = reduce(lambda acc, x: acc + x, numbers, 0)\n```\n\nIn practice, idiomatic Python prefers comprehensions to map and filter because they read better, and prefers built-ins such as sum(), min() and max() to reduce. map is still useful when you already have a named function to apply: `map(str.strip, lines)`.',
    },
  },
  {
    id: 'python-19-what-are-decorators-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Decorators في Python؟',
      en: 'What are decorators in Python?',
    },
    answer: {
      ar: 'Decorators هي دوال تُستخدم لتعديل سلوك دالة أخرى بدون تغيير كودها.',
      en: 'A decorator is a function that wraps another function to change its behaviour without modifying its code:\n\n```python\nimport functools, time\n\ndef timed(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        logger.info("%s took %.3fs", func.__name__, time.perf_counter() - start)\n        return result\n    return wrapper\n\n@timed\ndef process_batch(items): ...\n```\n\nThe @functools.wraps line matters: without it the wrapper replaces the original function\'s name and docstring, which breaks introspection and documentation.\n\nDecorators are everywhere in Python frameworks — @app.route in Flask, @property, @staticmethod, @lru_cache — and they are the mechanism behind cross-cutting concerns such as caching, retries, authentication and logging.',
    },
  },
  {
    id: 'python-20-how-do-you-create',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك إنشاء فئة في Python؟',
      en: 'How do you create a class in Python?',
    },
    answer: {
      ar: 'يمكن إنشاء فئة باستخدام الكلمة المفتاحية `class`, مثل: `class MyClass:`.',
      en: '```python\nclass BankAccount:\n    interest_rate = 0.05                 # class attribute, shared\n\n    def __init__(self, owner: str, balance: float = 0):\n        self.owner = owner               # instance attributes\n        self._balance = balance\n\n    def deposit(self, amount: float) -> None:\n        if amount <= 0:\n            raise ValueError("amount must be positive")\n        self._balance += amount\n\n    @property\n    def balance(self) -> float:\n        return self._balance\n\n    def __repr__(self) -> str:\n        return f"BankAccount(owner={self.owner!r}, balance={self._balance})"\n```\n\nNote that `self` is the explicit first parameter of every instance method, and that __repr__ is worth writing — it is what you see when debugging.',
    },
  },
  {
    id: 'python-21-which-libraries-are-commonly',
    difficulty: beginner,
    question: {
      ar: 'ما هي المكتبات الشائعة المستخدمة مع Python؟',
      en: 'Which libraries are commonly used with Python?',
    },
    answer: {
      ar: 'بعض المكتبات الشائعة تشمل NumPy، Pandas، وFlask.',
      en: 'By domain:\n• Data: NumPy, Pandas, Polars.\n• Machine learning: scikit-learn, PyTorch, TensorFlow.\n• Web: Django, FastAPI, Flask.\n• HTTP clients: requests, httpx.\n• Validation: Pydantic.\n• Databases: SQLAlchemy, psycopg.\n• Testing: pytest.\n• Tooling: Ruff for linting and formatting, mypy for type checking.\n\nFastAPI and Pydantic in particular changed how modern Python APIs are written, by deriving validation and OpenAPI documentation from type hints.',
    },
  },
  {
    id: 'python-22-how-do-you-convert',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تحويل سلسلة نصية إلى عدد في Python؟',
      en: 'How do you convert a string to a number in Python?',
    },
    answer: {
      ar: 'يمكن استخدام الدالة `int()` لتحويل سلسلة نصية إلى عدد صحيح، مثل: `int(\'123\')`.',
      en: '```python\nint("123")          # 123\nfloat("3.14")       # 3.14\nint("0x1A", 16)     # 26 — with an explicit base\n```\n\nBoth raise ValueError on invalid input, so wrap them in try/except when the input comes from a user or a file. Two details worth knowing: int() truncates toward zero rather than rounding, and float arithmetic is binary floating point — so for money, use decimal.Decimal, not float.',
    },
  },
  {
    id: 'python-23-what-is-exception-handling',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Exception Handling في Python؟',
      en: 'What is exception handling in Python and what are the common exception types?',
    },
    answer: {
      ar: 'Exception Handling تُستخدم لإدارة الأخطاء التي تحدث أثناء تنفيذ البرنامج.',
      en: 'Exception handling is how you deal with errors that occur during execution without crashing the program. The exceptions you meet most often:\n• ValueError — right type, wrong value.\n• TypeError — wrong type entirely.\n• KeyError and IndexError — a missing key or an out-of-range index.\n• FileNotFoundError, PermissionError — filesystem issues.\n• AttributeError — accessing something that does not exist on an object.\n\nDefining your own is a matter of subclassing Exception, which lets callers catch your application\'s failures specifically rather than catching everything.',
    },
  },
  {
    id: 'python-24-how-do-you-check',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك فحص ما إذا كان عنصر موجودًا في قائمة؟',
      en: 'How do you check whether an item exists in a list?',
    },
    answer: {
      ar: 'يمكن استخدام العامل `in`، مثل: `if element in my_list:`.',
      en: 'With the `in` operator:\n\n```python\nif element in my_list: ...\nif key in my_dict: ...            # checks keys\nif substring in text: ...\n```\n\nA performance note worth knowing: `in` on a list is O(n) because it scans every element, while on a set or dict it is O(1). If you are doing many membership checks against a large collection, converting it to a set first is a significant win.',
    },
  },
  {
    id: 'python-25-what-are-context-managers',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Context Managers في Python؟',
      en: 'What are context managers in Python?',
    },
    answer: {
      ar: 'Context Managers تُستخدم لإدارة الموارد بشكل صحيح، مثل فتح وإغلاق الملفات.',
      en: 'A context manager guarantees that setup and cleanup happen around a block, even if an exception is raised. The `with` statement is its syntax:\n\n```python\nwith open("file.txt") as f:      # closed automatically\n    data = f.read()\n\nfrom contextlib import contextmanager\n\n@contextmanager\ndef transaction(conn):\n    try:\n        yield conn\n        conn.commit()\n    except Exception:\n        conn.rollback()\n        raise\n    finally:\n        conn.close()\n```\n\nYou implement one either with __enter__/__exit__ on a class, or with the @contextmanager decorator as above. It is the right tool for anything that must be released: files, database connections, locks, temporary directories.',
    },
  },
  {
    id: 'python-26-how-do-you-write',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تنفيذ الاختبارات في Python؟',
      en: 'How do you write and run tests in Python?',
    },
    answer: {
      ar: 'يمكن استخدام إطار عمل مثل `unittest` لكتابة وتنفيذ اختبارات الوحدات.',
      en: 'unittest ships with the standard library, but pytest is what most projects actually use because it is far less verbose:\n\n```python\nimport pytest\n\ndef test_calculates_total():\n    assert calculate_total([{"price": 10}, {"price": 5}]) == 15\n\ndef test_rejects_negative_amount():\n    with pytest.raises(ValueError):\n        account.deposit(-10)\n\n@pytest.mark.parametrize("value,expected", [(0, 0), (2, 4), (3, 9)])\ndef test_square(value, expected):\n    assert square(value) == expected\n```\n\nIts fixtures handle setup and teardown cleanly, parametrize removes repetition, and the ecosystem adds pytest-cov for coverage and pytest-mock for test doubles.',
    },
  },
  {
    id: 'python-27-how-do-you-consume',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ API في Python؟',
      en: 'How do you consume and build APIs in Python?',
    },
    answer: {
      ar: 'API (Application Programming Interface) يُستخدم للتفاعل بين التطبيقات والبرامج.',
      en: 'To consume one, requests or httpx:\n\n```python\nimport httpx\n\nresponse = httpx.get(url, timeout=5.0)\nresponse.raise_for_status()\ndata = response.json()\n```\n\nTo build one, FastAPI is the modern default:\n\n```python\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass User(BaseModel):\n    name: str\n    email: str\n\n@app.post("/users")\nasync def create_user(user: User):\n    return await repository.create(user)\n```\n\nFastAPI derives validation and OpenAPI documentation from the type hints, which removes a whole category of boilerplate.',
    },
  },
  {
    id: 'python-28-how-do-you-create',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك إنشاء خيط في Python؟',
      en: 'How do you create threads in Python, and what is the GIL?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة `threading` لإنشاء خيوط جديدة.',
      en: '```python\nfrom concurrent.futures import ThreadPoolExecutor\n\nwith ThreadPoolExecutor(max_workers=10) as pool:\n    results = list(pool.map(fetch_url, urls))\n```\n\nThe crucial context is the Global Interpreter Lock: CPython allows only one thread to execute Python bytecode at a time. So threads do not speed up CPU-bound work, but they do help I/O-bound work, because the GIL is released while waiting on the network or disk.\n\nWhich means:\n• I/O-bound → threads, or better, asyncio.\n• CPU-bound → multiprocessing, which uses separate processes and therefore separate GILs.\n\nPython 3.13 introduced an experimental free-threaded build, so this constraint may ease in future versions.',
    },
  },
  {
    id: 'python-29-what-is-pandas-used',
    difficulty: beginner,
    question: {
      ar: 'ما هي الـ Pandas في Python؟',
      en: 'What is Pandas used for in Python?',
    },
    answer: {
      ar: 'Pandas هي مكتبة تُستخدم لتحليل البيانات والتلاعب بها بسهولة.',
      en: 'Pandas is the standard library for tabular data analysis, built around the DataFrame — essentially an in-memory table with labelled rows and columns:\n\n```python\nimport pandas as pd\n\ndf = pd.read_csv("sales.csv")\nmonthly = (df[df["status"] == "completed"]\n           .groupby("month")["amount"]\n           .sum()\n           .sort_values(ascending=False))\n```\n\nIt handles reading and writing most formats, filtering, grouping, joining, reshaping and time series work. Its main limitation is that everything is held in memory, so very large datasets need chunking, Polars, or a distributed tool such as Spark.',
    },
  },
  {
    id: 'python-30-how-do-you-debug',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تصحيح الأخطاء في Python؟',
      en: 'How do you debug Python code?',
    },
    answer: {
      ar: 'يمكن استخدام `print()` لتصحيح الأخطاء أو استخدام مكتبة `pdb` لتصحيح الأخطاء بشكل تفاعلي.',
      en: 'print() gets you surprisingly far, but the proper tools are better:\n\n```python\nbreakpoint()        # drops into pdb at this line (Python 3.7+)\n```\n\nInside pdb: `n` steps to the next line, `s` steps into a call, `c` continues, `p expr` prints an expression, `l` lists the surrounding code.\n\nBeyond that: an IDE debugger with visual breakpoints, the logging module instead of print for anything that should survive into production, and a traceback read from the bottom up — the last frame is where the error actually happened.',
    },
  },
];

// data/categories/database.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate, advanced } = DIFFICULTY;

export const database = [
  {
    id: 'database-1-what-is-a-database',
    difficulty: beginner,
    question: {
      ar: 'ما هي الdatabase؟',
      en: 'What is a database?',
    },
    answer: {
      ar: 'قاعدة البيانات هي مجموعة منظمة من البيانات تُستخدم لتخزين المعلومات بطريقة تسمح بالاسترجاع والتحديث بسهولة.',
      en: 'A database is an organised collection of data stored so that it can be retrieved, updated and managed efficiently. The software that manages it is the DBMS. The two broad families are relational databases, which store data in tables with defined relationships and are queried with SQL, and NoSQL databases, which use other models such as documents, key/value pairs, wide columns or graphs.',
    },
  },
  {
    id: 'database-2-what-is-sql',
    difficulty: beginner,
    question: {
      ar: 'ما هي SQL؟',
      en: 'What is SQL?',
    },
    answer: {
      ar: 'SQL (Structured Query Language) هي لغة برمجة تُستخدم لإدارة واسترجاع البيانات في قواعد البيانات العلائقية.',
      en: 'SQL (Structured Query Language) is the standard language for managing and querying relational databases. It covers several categories: DDL for defining structure (CREATE, ALTER, DROP), DML for manipulating data (SELECT, INSERT, UPDATE, DELETE), DCL for permissions (GRANT, REVOKE) and TCL for transactions (COMMIT, ROLLBACK). It is declarative — you describe the result you want and the query planner decides how to produce it.',
    },
  },
  {
    id: 'database-3-what-does-acid-mean',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ ACID في database؟',
      en: 'What does ACID mean in databases?',
    },
    answer: {
      ar: 'ACID هو مجموعة من الخصائص لضمان معالجة المعاملات بشكل موثوق، وهي تتضمن: Atomicity وConsistency وIsolation وDurability.',
      en: 'ACID is the set of guarantees a reliable transaction provides:\n\n• Atomicity — the transaction happens entirely or not at all. A transfer cannot debit one account without crediting the other.\n• Consistency — the database moves from one valid state to another, respecting all constraints.\n• Isolation — concurrent transactions do not interfere with each other; the isolation level determines how strictly.\n• Durability — once committed, the change survives a crash, because it is written to durable storage first.\n\nIsolation is the one with real trade-offs: stricter levels prevent anomalies such as dirty reads and phantom reads but reduce concurrency, which is why most systems default to Read Committed rather than Serializable.',
    },
  },
  {
    id: 'database-4-what-are-joins-in',
    difficulty: beginner,
    question: {
      ar: 'ما هي الـ Joins في SQL؟',
      en: 'What are joins in SQL?',
    },
    answer: {
      ar: 'Joins تُستخدم لربط صفوف من جدولين أو أكثر بناءً على شرط معين، مثل INNER JOIN وLEFT JOIN.',
      en: 'Joins combine rows from two or more tables based on a related column:\n\n```sql\nSELECT o.id, u.name, o.total\nFROM orders o\nJOIN users u ON u.id = o.user_id\nWHERE o.created_at > \'2024-01-01\';\n```\n\nThe main types are INNER JOIN (only matching rows), LEFT JOIN (all rows from the left table plus matches), RIGHT JOIN, FULL OUTER JOIN and CROSS JOIN (every combination).\n\nTwo practical notes: the join column should be indexed, and a self-join — a table joined to itself — is how you query hierarchies such as employees and managers.',
    },
  },
  {
    id: 'database-5-what-is-the-difference',
    difficulty: beginner,
    question: {
      ar: 'ما الفرق بين الـ INNER JOIN و الـ OUTER JOIN؟',
      en: 'What is the difference between INNER JOIN and OUTER JOIN?',
    },
    answer: {
      ar: 'INNER JOIN يُرجع الصفوف المتطابقة في كلا الجدولين، بينما OUTER JOIN يُرجع الصفوف المتطابقة بالإضافة إلى الصفوف غير المتطابقة من جدول واحد.',
      en: 'INNER JOIN returns only rows that match in both tables. OUTER JOIN also returns unmatched rows, filling the missing side with NULL.\n\n```sql\n-- only users who have placed orders\nSELECT u.name, o.total FROM users u INNER JOIN orders o ON o.user_id = u.id;\n\n-- every user, with NULL for those who have not ordered\nSELECT u.name, o.total FROM users u LEFT JOIN orders o ON o.user_id = u.id;\n\n-- users who have never ordered\nSELECT u.name FROM users u LEFT JOIN orders o ON o.user_id = u.id WHERE o.id IS NULL;\n```\n\nThat last pattern is worth remembering — a LEFT JOIN with an IS NULL filter is the standard way to find rows with no counterpart.\n\nA common mistake: putting a condition on the outer table in the WHERE clause instead of the ON clause silently turns a LEFT JOIN back into an INNER JOIN.',
    },
  },
  {
    id: 'database-6-what-is-a-primary',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Primary Key؟',
      en: 'What is a primary key?',
    },
    answer: {
      ar: 'Primary Key هو عمود (أو مجموعة أعمدة) يُستخدم لتحديد كل سجل بشكل فريد في الجدول.',
      en: 'A primary key is the column or set of columns that uniquely identifies each row in a table. It cannot be NULL, must be unique, and a table has exactly one.\n\nThe design choice worth discussing is natural versus surrogate keys. A natural key uses existing data such as an email address; a surrogate key is a meaningless generated value such as an auto-incrementing integer or a UUID. Surrogate keys are usually preferred because real-world values change — people change email addresses — and a changing primary key means updating every foreign key that references it.\n\nBetween integers and UUIDs: integers are smaller and index better, while UUIDs can be generated client-side and do not leak row counts. UUIDv7, which is time-ordered, avoids the index fragmentation that random UUIDs cause.',
    },
  },
  {
    id: 'database-7-what-is-a-foreign',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Foreign Key؟',
      en: 'What is a foreign key?',
    },
    answer: {
      ar: 'Foreign Key هو عمود يُستخدم لربط جدولين معًا، حيث يشير إلى الـ Primary Key في جدول آخر.',
      en: 'A foreign key is a column that references the primary key of another table, establishing a relationship and enforcing referential integrity — you cannot insert an order for a user that does not exist, and you cannot delete a user while orders still reference them.\n\n```sql\nCREATE TABLE orders (\n  id BIGSERIAL PRIMARY KEY,\n  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE RESTRICT,\n  total NUMERIC(10,2) NOT NULL CHECK (total >= 0)\n);\n```\n\nThe ON DELETE behaviour is a real design decision: CASCADE deletes the children too, RESTRICT blocks the delete, and SET NULL orphans them. CASCADE is convenient and occasionally catastrophic, so choose it deliberately.\n\nAlso worth knowing: most databases do not index foreign keys automatically, and an unindexed foreign key makes both joins and cascading deletes slow.',
    },
  },
  {
    id: 'database-8-what-is-normalization',
    difficulty: intermediate,
    question: {
      ar: 'ما هي الـ Normalization في database؟',
      en: 'What is normalization?',
    },
    answer: {
      ar: 'Normalization هي عملية تنظيم البيانات في database لتقليل التكرار وتعزيز تكامل البيانات.',
      en: 'Normalization organises data to reduce redundancy and protect integrity, by splitting information into related tables.\n\nThe forms you actually use:\n• 1NF — atomic values, no repeating groups in a column.\n• 2NF — no partial dependency on part of a composite key.\n• 3NF — no non-key column depending on another non-key column.\n\nThe practical goal is that every fact is stored exactly once. If a customer\'s address appears in a thousand order rows, changing it means a thousand updates and any missed row is now wrong.\n\nMost operational databases aim for 3NF. Beyond that the forms rarely earn their complexity, and there are legitimate reasons to denormalize deliberately for read performance.',
    },
  },
  {
    id: 'database-9-what-is-denormalization',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Denormalization؟',
      en: 'What is denormalization?',
    },
    answer: {
      ar: 'Denormalization هي عملية دمج الجداول لتحسين أداء الاستعلامات، على حساب زيادة التكرار.',
      en: 'Denormalization deliberately introduces redundancy — duplicating a column or merging tables — to make reads faster by avoiding joins.\n\nWhen it is justified:\n• Read-heavy workloads where a join across several large tables is measurably slow.\n• Reporting and analytics, where star schemas are denormalized by design.\n• A frequently computed aggregate, such as a stored order count, kept as a column rather than recomputed.\n• Storing a value at a point in time — the price on an order must be the price when it was placed, not today\'s price. That is not really denormalization but a genuine business requirement people often mistake for one.\n\nThe cost is that you now own consistency: every write path must update every copy, usually through triggers or application logic. So it is a decision made after measuring, not before.',
    },
  },
  {
    id: 'database-10-what-is-indexing-and',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Indexing؟',
      en: 'What is indexing and how does it work?',
    },
    answer: {
      ar: 'Indexing تُستخدم لتحسين سرعة عمليات الاستعلام عن طريق إنشاء هيكل بيانات يُسرع الوصول إلى الصفوف.',
      en: 'An index is an auxiliary data structure — usually a B-tree — that lets the database find rows without scanning the whole table, turning an O(n) scan into an O(log n) lookup.\n\n```sql\nCREATE INDEX idx_orders_user_created ON orders(user_id, created_at DESC);\n```\n\nWhat to index: columns used in WHERE clauses, join conditions, and ORDER BY.\n\nThe costs, which are real: every index slows down INSERT, UPDATE and DELETE because it must be maintained, and each one consumes disk space. An over-indexed table with heavy writes performs worse, not better.\n\nTwo important details: in a composite index the column order matters — an index on (a, b) helps a query filtering on `a` or on `a AND b`, but not one filtering on `b` alone. And wrapping an indexed column in a function, such as `WHERE LOWER(email) = ...`, prevents the index being used unless you create a matching expression index.',
    },
  },
  {
    id: 'database-11-what-is-the-difference',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الفرق بين الـ clustered و الـ non-clustered index؟',
      en: 'What is the difference between a clustered and a non-clustered index?',
    },
    answer: {
      ar: 'Clustered Index يُحدد كيفية تخزين الصفوف في القرص، بينما Non-clustered Index يُحتفظ به في هيكل منفصل.',
      en: 'A clustered index determines the physical order of rows on disk, so the table itself is the index. There can be only one per table, and in SQL Server and MySQL/InnoDB the primary key is clustered by default.\n\nA non-clustered index is a separate structure holding the indexed columns plus a pointer back to the row. A table can have many.\n\nThe performance consequence: a clustered index is excellent for range queries, because matching rows are physically adjacent. A non-clustered index requires an extra lookup to fetch the remaining columns — unless it is a covering index that already contains everything the query needs, in which case the table is never touched.\n\nA note on portability: PostgreSQL has no clustered indexes in this sense; its tables are heap-organised, and the CLUSTER command is a one-off reordering rather than a maintained property.',
    },
  },
  {
    id: 'database-12-what-is-sql-injection',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ SQL Injection؟',
      en: 'What is SQL injection and how do you prevent it?',
    },
    answer: {
      ar: 'SQL Injection هو هجوم يُستخدم لاستغلال الثغرات في تطبيقات الويب من خلال إدخال أوامر SQL ضارة.',
      en: 'SQL injection is an attack where user input is interpreted as SQL rather than as data, letting an attacker read, modify or destroy the database.\n\n```sql\n-- the application builds this\n"SELECT * FROM users WHERE email = \'" + input + "\'"\n\n-- the attacker supplies: \' OR \'1\'=\'1\n-- the database receives: SELECT * FROM users WHERE email = \'\' OR \'1\'=\'1\'\n```\n\nThe fix is parameterised queries, always:\n```sql\nSELECT * FROM users WHERE email = ?\n```\nThis works because the query structure is parsed before the data arrives, so the data can never become part of the statement.\n\nSupporting measures: validate input, give the application\'s database account only the privileges it needs, use an ORM or query builder that parameterises by default, and remember that table and column names cannot be parameterised — if they come from user input they must be checked against an allowlist.',
    },
  },
  {
    id: 'database-13-what-are-transactions-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Transactions في database؟',
      en: 'What are transactions in a database?',
    },
    answer: {
      ar: 'Transactions هي مجموعة من العمليات التي تُعالج ككل، حيث يجب أن تنجح جميعها أو تفشل.',
      en: 'A transaction groups operations so they either all succeed or all fail, leaving the database consistent either way.\n\n```sql\nBEGIN;\n  UPDATE accounts SET balance = balance - 500 WHERE id = 1;\n  UPDATE accounts SET balance = balance + 500 WHERE id = 2;\nCOMMIT;   -- or ROLLBACK on failure\n```\n\nWithout this, a failure between the two statements leaves money destroyed.\n\nWhat matters in practice:\n• Keep transactions short. A long transaction holds locks and blocks other work.\n• Never put an external HTTP call inside one — the lock is held for the whole network wait.\n• Choose the isolation level deliberately; the default is usually Read Committed, and Serializable prevents more anomalies at the cost of concurrency.\n• Handle deadlocks by retrying, since two transactions locking the same rows in opposite orders will eventually collide.',
    },
  },
  {
    id: 'database-14-what-is-a-view',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ View في SQL؟',
      en: 'What is a view in SQL?',
    },
    answer: {
      ar: 'View هو استعلام مخزن يُستخدم كجدول افتراضي، مما يسهل عرض البيانات المعقدة.',
      en: 'A view is a stored query that behaves like a virtual table:\n\n```sql\nCREATE VIEW active_customers AS\nSELECT u.id, u.name, COUNT(o.id) AS order_count\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id\nWHERE u.status = \'active\'\nGROUP BY u.id, u.name;\n```\n\nIts uses: hiding complexity behind a simple name, exposing a restricted subset of columns as a security boundary, and providing a stable interface while the underlying tables change.\n\nA normal view stores no data — it runs the query each time — so it does not improve performance. A materialized view does store the result and must be refreshed, which trades freshness for speed and is genuinely useful for expensive aggregations.',
    },
  },
  {
    id: 'database-15-what-are-stored-procedures',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكن استخدام الـ Stored Procedures؟',
      en: 'What are stored procedures?',
    },
    answer: {
      ar: 'Stored Procedures هي مجموعة من التعليمات SQL تُخزن في قاعدة البيانات ويمكن استدعاؤها من التطبيقات.',
      en: 'A stored procedure is a named set of SQL statements stored in the database and callable by applications, with parameters and control flow.\n\nThe arguments for them: logic runs close to the data with no network round trips per statement, complex multi-step operations execute atomically, and permissions can be granted on the procedure rather than the underlying tables.\n\nThe arguments against, which is why modern applications use them less: business logic in the database is harder to version-control, test and review; it is tied to one database vendor\'s dialect; and it splits the application\'s logic across two places, so a developer has to look in both.\n\nA reasonable position is to keep business logic in the application and reserve procedures for genuinely data-intensive operations where moving the data to the application would be wasteful.',
    },
  },
  {
    id: 'database-16-what-are-triggers-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Triggers في database؟',
      en: 'What are triggers in a database?',
    },
    answer: {
      ar: 'Triggers هي إجراءات تُنفذ تلقائيًا استجابة لحدث معين، مثل INSERT أو UPDATE.',
      en: 'A trigger is a procedure the database runs automatically in response to an event — INSERT, UPDATE or DELETE on a table.\n\n```sql\nCREATE TRIGGER set_updated_at\nBEFORE UPDATE ON orders\nFOR EACH ROW\nEXECUTE FUNCTION touch_updated_at();\n```\n\nLegitimate uses: audit logging, maintaining a timestamp, and enforcing an invariant that constraints cannot express.\n\nThe caution is real. Triggers are invisible from the application\'s perspective, so behaviour happens with no call site to find when debugging. They run inside the transaction, so a slow trigger slows every write. And a trigger that writes to another table can fire further triggers, producing cascades that are hard to reason about.\n\nSo the guidance is: use them sparingly, keep them tiny, and document them clearly — a developer reading the application code will not know they exist.',
    },
  },
  {
    id: 'database-17-what-is-a-data',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ Data Warehouse؟',
      en: 'What is a data warehouse?',
    },
    answer: {
      ar: 'Data Warehouse هو نظام يُستخدم لتخزين البيانات من مصادر متعددة لغرض التحليل والتقارير.',
      en: 'A data warehouse is a database designed for analysis and reporting rather than for running an application. It consolidates data from multiple sources, structured for querying large volumes rather than for frequent small writes.\n\nThe differences from an operational database:\n• It is optimised for reads over massive datasets, often using columnar storage.\n• It is deliberately denormalized, typically into a star schema of fact and dimension tables.\n• It holds historical data rather than only the current state.\n• Data arrives in batches through ETL or ELT pipelines rather than transaction by transaction.\n\nThe reason to separate it at all is that analytical queries scanning millions of rows would otherwise compete with, and slow down, the transactional workload that users depend on. Modern examples include Snowflake, BigQuery and Redshift.',
    },
  },
  {
    id: 'database-18-what-is-the-difference',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ OLTP و OLAP؟',
      en: 'What is the difference between OLTP and OLAP?',
    },
    answer: {
      ar: 'OLTP (Online Transaction Processing) يُستخدم لإدارة المعاملات اليومية، بينما OLAP (Online Analytical Processing) يُستخدم للتحليل وإعداد التقارير.',
      en: 'They describe two very different workloads.\n\nOLTP (Online Transaction Processing) runs the application: many small, fast reads and writes, high concurrency, normalized schema, indexed for point lookups. Placing an order is an OLTP operation.\n\nOLAP (Online Analytical Processing) answers questions about the data: few queries, each scanning huge volumes, aggregating and grouping. Denormalized, often columnar. "Revenue by region by month for three years" is an OLAP query.\n\nWhy the distinction matters practically: running analytical queries against your production database is a common and costly mistake — one report scanning ten million rows can lock tables and degrade the application for everyone. The standard answer is a read replica for light reporting, and a separate warehouse for serious analytics.',
    },
  },
  {
    id: 'database-19-what-are-nosql-databases',
    difficulty: intermediate,
    question: {
      ar: 'ما هي قواعد البيانات NoSQL؟',
      en: 'What are NoSQL databases?',
    },
    answer: {
      ar: 'NoSQL هي نوع من قواعد البيانات التي لا تستخدم SQL كوسيلة رئيسية للاستعلام، وتدعم أنواع بيانات متنوعة.',
      en: 'NoSQL covers databases that do not follow the relational model, in four broad families:\n\n• Document — MongoDB, CouchDB. JSON-like documents with flexible structure.\n• Key/value — Redis, DynamoDB. Extremely fast simple lookups.\n• Wide column — Cassandra, HBase. Built for enormous write volumes.\n• Graph — Neo4j. Optimised for traversing relationships.\n\nWhat they typically trade away is the strict consistency and join capability of relational systems, in exchange for horizontal scalability and schema flexibility.\n\nThe honest framing for an interview: relational is the right default for most applications, because most data is relational and transactions matter. NoSQL earns its place for a specific access pattern — caching, session storage, time-series ingestion, or genuinely graph-shaped data. And the old argument that relational databases cannot handle JSON no longer holds; PostgreSQL\'s JSONB support is excellent.',
    },
  },
  {
    id: 'database-20-what-is-mongodb',
    difficulty: beginner,
    question: {
      ar: 'ما هو MongoDB؟',
      en: 'What is MongoDB?',
    },
    answer: {
      ar: 'MongoDB هو نظام قاعدة بيانات NoSQL يُخزن البيانات في تنسيق JSON-like، مما يُتيح هيكل مرن.',
      en: 'MongoDB is a document database that stores data as BSON — a binary form of JSON — allowing nested structures and a flexible schema.\n\n```js\ndb.orders.find({ status: "paid", total: { $gt: 100 } })\n  .sort({ createdAt: -1 })\n  .limit(20);\n```\n\nWhere it fits well: data that is naturally document-shaped and read as a unit, rapidly evolving schemas, and content or catalogue systems.\n\nWhere it fits badly: data with many relationships, where you end up implementing joins in application code, and anything needing multi-document transactional guarantees — supported since version 4.0, but not its strength.\n\nOne caveat worth raising: "schemaless" does not mean no schema, it means the schema lives in your application code rather than the database. Without discipline, or MongoDB\'s schema validation, that becomes inconsistent data nobody can query reliably.',
    },
  },
  {
    id: 'database-21-how-do-you-optimise',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تحسين أداء استعلامات SQL؟',
      en: 'How do you optimise a slow SQL query?',
    },
    answer: {
      ar: 'يمكن تحسين أداء استعلامات SQL عن طريق استخدام الفهارس، تحسين الاستعلامات، وتقليل التكرار.',
      en: 'Start with EXPLAIN ANALYZE, which shows the actual execution plan and where the time goes. Then look for:\n\n1. Sequential scans on large tables — usually a missing index on a WHERE or JOIN column.\n2. An index that exists but is not used, commonly because the column is wrapped in a function, or a type mismatch prevents it.\n3. SELECT * pulling columns nobody needs, especially large text fields.\n4. Missing pagination — LIMIT with a cursor rather than a large OFFSET, which gets slower the deeper you go.\n5. N+1 queries from the application, where one query became hundreds.\n6. Sorting on an unindexed column, forcing a disk sort.\n7. Stale statistics, causing the planner to choose a bad plan — fixed by ANALYZE.\n\nThe order matters: the biggest win is almost always an index or eliminating an N+1, not micro-optimising the SQL text. And measure with production-like data volumes — a query that is fast on a thousand rows tells you nothing about a million.',
    },
  },
  {
    id: 'database-22-what-is-data-integrity',
    difficulty: beginner,
    question: {
      ar: 'ما هو الـ Data Integrity؟',
      en: 'What is data integrity?',
    },
    answer: {
      ar: 'Data Integrity تشير إلى دقة وموثوقية البيانات المخزنة في database',
      en: 'Data integrity means the data in the database is accurate, consistent and trustworthy. The database enforces it at several levels:\n\n• Entity integrity — a primary key that is unique and not null, so every row is identifiable.\n• Referential integrity — foreign keys, so a reference always points at something real.\n• Domain integrity — data types, NOT NULL, CHECK constraints and defaults, so values are in the valid range.\n• User-defined integrity — business rules expressed as constraints or triggers.\n\nThe point worth making in an interview is that these belong in the database, not only in the application. Applications get rewritten, scripts touch the data directly, and a second service may write to the same tables. Constraints in the schema are the only guarantee that survives all of that.',
    },
  },
  {
    id: 'database-23-what-is-a-schema',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Schema في database؟',
      en: 'What is a schema in a database?',
    },
    answer: {
      ar: 'Schema هو هيكل يحدد كيفية تنظيم البيانات داخل database، بما في ذلك الجداول والعلاقات.',
      en: 'The word carries two meanings, both common.\n\nThe design sense: the structure of the database — its tables, columns, types, keys, indexes and relationships. This is what people mean by "schema design" or "schema migration".\n\nThe namespace sense: in PostgreSQL and SQL Server, a schema is also a container grouping objects within a database, so you can have `sales.orders` and `inventory.orders` without collision, with permissions granted per schema.\n\nIn practice the schema is managed as code through migration files, versioned alongside the application, so every environment can be brought to the same structure reproducibly.',
    },
  },
  {
    id: 'database-24-how-do-you-retrieve',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استرجاع البيانات من قاعدة بيانات باستخدام SQL؟',
      en: 'How do you retrieve data with SQL?',
    },
    answer: {
      ar: 'يمكن استرجاع البيانات باستخدام استعلام SELECT، مثل: `SELECT * FROM table_name WHERE condition`.',
      en: 'With SELECT:\n\n```sql\nSELECT u.name, COUNT(o.id) AS order_count\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id\nWHERE u.created_at >= \'2024-01-01\'\nGROUP BY u.id, u.name\nHAVING COUNT(o.id) > 5\nORDER BY order_count DESC\nLIMIT 20 OFFSET 0;\n```\n\nThe clauses execute in a different order from how they are written: FROM and JOIN first, then WHERE, then GROUP BY, then HAVING, then SELECT, then ORDER BY, then LIMIT. That explains a frequent confusion — why you cannot reference a SELECT alias in the WHERE clause, but can in ORDER BY.\n\nAnd the distinction between WHERE and HAVING follows from it: WHERE filters rows before grouping, HAVING filters groups afterwards.',
    },
  },
  {
    id: 'database-25-what-are-aggregate-functions',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Aggregate Functions في SQL؟',
      en: 'What are aggregate functions in SQL?',
    },
    answer: {
      ar: 'Aggregate Functions تُستخدم لإجراء عمليات حسابية على مجموعة من القيم، مثل SUM وCOUNT وAVG.',
      en: 'Aggregate functions compute a single value from a set of rows:\n\n```sql\nSELECT\n  COUNT(*)            AS total_orders,\n  COUNT(discount_code) AS with_discount,   -- ignores NULLs\n  SUM(total)          AS revenue,\n  AVG(total)          AS average_order,\n  MIN(created_at)     AS first_order,\n  MAX(total)          AS largest_order\nFROM orders\nWHERE status = \'paid\';\n```\n\nTwo details that come up: COUNT(*) counts rows while COUNT(column) skips NULLs, and every aggregate other than COUNT(*) ignores NULL values entirely — so AVG over a column with nulls averages only the non-null rows.\n\nWith GROUP BY you get one result per group, and window functions (`SUM(...) OVER (PARTITION BY ...)`) aggregate without collapsing the rows, which is extremely useful for running totals and rankings.',
    },
  },
  {
    id: 'database-26-what-are-constraints-in',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Constraints في SQL؟',
      en: 'What are constraints in SQL?',
    },
    answer: {
      ar: 'Constraints تُستخدم لتحديد القواعد على البيانات في الجدول، مثل NOT NULL وUNIQUE وCHECK.',
      en: 'Constraints are rules the database enforces on the data:\n\n```sql\nCREATE TABLE products (\n  id        BIGSERIAL PRIMARY KEY,\n  sku       VARCHAR(50) NOT NULL UNIQUE,\n  price     NUMERIC(10,2) NOT NULL CHECK (price > 0),\n  stock     INT NOT NULL DEFAULT 0 CHECK (stock >= 0),\n  category_id BIGINT REFERENCES categories(id)\n);\n```\n\nThe types are NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK and DEFAULT.\n\nThe argument for putting them in the schema rather than relying on application validation: the database is the last line of defence. Application code changes, a second service may write to the same tables, and someone will eventually run a manual UPDATE. A CHECK constraint holds in all of those cases. It also catches race conditions that application-level checks cannot — a uniqueness check followed by an insert has a window between them; a unique index does not.',
    },
  },
  {
    id: 'database-27-how-do-you-back',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك إجراء نسخ احتياطي لdatabase؟',
      en: 'How do you back up a database?',
    },
    answer: {
      ar: 'يمكن إجراء نسخ احتياطي باستخدام أدوات خاصة بdatabase أو من خلال الأوامر SQL.',
      en: 'Two complementary forms:\n\n1. A logical backup — an export of schema and data as statements, such as pg_dump or mysqldump. Portable and selective, but slow to restore for large databases.\n2. A physical backup — a copy of the data files, which is much faster to restore at scale. Combined with write-ahead log archiving it enables point-in-time recovery, letting you restore to the moment before a mistake.\n\nWhat matters beyond the command:\n• Test the restore. An untested backup is not a backup — restore failures are usually discovered during an emergency.\n• Store copies off-site; a backup on the same server does not survive losing the server.\n• Define your RPO (how much data you can afford to lose) and RTO (how long recovery may take), because those determine the strategy.\n• Encrypt backups — they contain everything.\n• Automate and monitor, so a silently failing job is noticed.',
    },
  },
  {
    id: 'database-28-what-is-replication-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو الـ Replication في database؟',
      en: 'What is replication in a database?',
    },
    answer: {
      ar: 'Replication هي عملية نسخ البيانات من قاعدة بيانات إلى أخرى لتحسين التوفر والموثوقية.',
      en: 'Replication copies data from a primary database to one or more replicas, for availability, read scaling and disaster recovery.\n\nThe main modes:\n• Asynchronous — the primary commits without waiting for replicas. Fast, but a failover can lose recent writes.\n• Synchronous — the primary waits for acknowledgement. No data loss, at the cost of write latency.\n\nThe practical consequence you must design for is replication lag: a user updates their profile, the write goes to the primary, and the next read hits a replica that has not caught up — so they see stale data and assume the save failed. The usual fix is to read from the primary immediately after a write, or to route a user\'s session to the primary for a short window.\n\nReplication is also not a backup: a DELETE replicates faithfully to every replica.',
    },
  },
  {
    id: 'database-29-what-is-partitioning-in',
    difficulty: advanced,
    question: {
      ar: 'ما هو الـ Partitioning في database؟',
      en: 'What is partitioning in a database?',
    },
    answer: {
      ar: 'Partitioning تُستخدم لتقسيم جدول كبير إلى أجزاء أصغر لتحسين الأداء وإدارة البيانات.',
      en: 'Partitioning splits one large table into smaller physical pieces while it still behaves as a single table to queries.\n\nThe strategies:\n• Range — commonly by date, one partition per month.\n• List — by a discrete value such as region.\n• Hash — to distribute rows evenly.\n\nWhy it helps: the planner can skip partitions that cannot contain matching rows (partition pruning), indexes per partition are smaller and faster, and — often the real win — you can drop an old partition instantly instead of running a DELETE that takes hours and bloats the table.\n\nWhen it is worth it: very large tables, typically tens of millions of rows or more, with a natural partition key that queries actually filter on. If queries do not filter on that key, pruning never happens and you have added complexity for nothing.\n\nIt is distinct from sharding, which splits data across separate servers rather than within one.',
    },
  },
];

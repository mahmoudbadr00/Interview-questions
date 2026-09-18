// data/categories/ruby.js
import { DIFFICULTY } from '../difficulty.js';

const { beginner, intermediate } = DIFFICULTY;

export const ruby = [
  {
    id: 'ruby-1-what-is-ruby',
    difficulty: beginner,
    question: {
      ar: 'ما هو Ruby؟',
      en: 'What is Ruby?',
    },
    answer: {
      ar: 'Ruby هي لغة برمجة كائنية التوجه تُستخدم لتطوير تطبيقات الويب، وتتميز بالبساطة والوضوح.',
      en: 'Ruby is a dynamic, object-oriented language designed around developer happiness and readable code. It is best known for web development through Ruby on Rails. Its defining characteristic is that everything is an object — including numbers and nil — and that its syntax reads close to natural language.',
    },
  },
  {
    id: 'ruby-2-what-are-the-advantages',
    difficulty: beginner,
    question: {
      ar: 'ما هي مميزات Ruby؟',
      en: 'What are the advantages of Ruby?',
    },
    answer: {
      ar: 'من مميزات Ruby سهولة القراءة، دعم البرمجة الكائنية، والمكتبات الواسعة المتاحة.',
      en: 'Highly readable, expressive syntax; a consistent object model; powerful metaprogramming; a mature ecosystem of gems; and Rails, which makes building conventional web applications extremely fast. The trade-offs are runtime performance relative to compiled languages, and higher memory usage — though for most web workloads the database is the bottleneck, not the language.',
    },
  },
  {
    id: 'ruby-3-how-do-you-define',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكن تعريف دالة في Ruby؟',
      en: 'How do you define a method in Ruby?',
    },
    answer: {
      ar: 'يمكن تعريف دالة باستخدام الكلمة المفتاحية `def`، مثل: `def my_method`.',
      en: 'With the def keyword:\n\n```ruby\ndef calculate_total(items, tax_rate: 0.14)\n  subtotal = items.sum { |item| item[:price] }\n  subtotal * (1 + tax_rate)\nend\n```\n\nThe last expression is returned implicitly, so explicit `return` is usually unnecessary. Ruby supports default values, keyword arguments and splat arguments. By convention, a method ending in `?` returns a boolean and one ending in `!` is the dangerous or mutating variant.',
    },
  },
  {
    id: 'ruby-4-how-do-classes-work',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الكلاسات (Classes) في Ruby؟',
      en: 'How do classes work in Ruby?',
    },
    answer: {
      ar: 'الكلاسات هي هياكل تُستخدم لتعريف كائنات وتحديد الخصائص والسلوكيات المرتبطة بها.',
      en: '```ruby\nclass BankAccount\n  attr_reader :owner, :balance\n\n  def initialize(owner, balance = 0)\n    @owner = owner\n    @balance = balance\n  end\n\n  def deposit(amount)\n    raise ArgumentError, "amount must be positive" unless amount.positive?\n    @balance += amount\n    self\n  end\nend\n```\n\nInstance variables start with @, and attr_reader, attr_writer and attr_accessor generate the accessor methods for you. Ruby has single inheritance of classes, with modules providing shared behaviour across unrelated classes.',
    },
  },
  {
    id: 'ruby-5-how-do-you-create',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكن إنشاء كائن من كلاس في Ruby؟',
      en: 'How do you create an object in Ruby?',
    },
    answer: {
      ar: 'يمكن إنشاء كائن باستخدام `MyClass.new`.',
      en: 'With `.new`, which allocates the object and calls its initialize method:\n\n```ruby\naccount = BankAccount.new("Sara", 1000)\n```\n\nAny arguments to new are passed straight through to initialize. Ruby also supports a common idiom of exposing a class-level factory method when construction needs a name: `BankAccount.open_for(user)` reads better than a constructor with several optional arguments.',
    },
  },
  {
    id: 'ruby-6-what-are-arrays-in',
    difficulty: beginner,
    question: {
      ar: 'ما هي المصفوفات (Arrays) في Ruby؟',
      en: 'What are arrays in Ruby?',
    },
    answer: {
      ar: 'المصفوفات تُستخدم لتخزين مجموعة من العناصر، ويمكن أن تحتوي على أنواع مختلفة.',
      en: 'Arrays are ordered, mutable collections that can hold any mix of types:\n\n```ruby\nitems = [1, "two", 3.0]\nitems << 4                       # append\nitems.map { |x| x.to_s }\nitems.select { |x| x.is_a?(Integer) }\nitems.each_with_index { |item, i| puts "#{i}: #{item}" }\n```\n\nRuby\'s collection methods come largely from the Enumerable module, which is why the same map, select and reduce work on arrays, hashes, ranges and any custom class that implements each.',
    },
  },
  {
    id: 'ruby-7-how-do-you-read',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك قراءة ملف في Ruby؟',
      en: 'How do you read a file in Ruby?',
    },
    answer: {
      ar: 'يمكن استخدام `File.read(\'filename.txt\')` لقراءة محتوى الملف.',
      en: '```ruby\ncontent = File.read("data.txt")\n\nFile.foreach("large.log") do |line|      # line by line, memory-friendly\n  process(line.chomp)\nend\n\nFile.open("out.txt", "w") { |f| f.write(content) }   # closed automatically\n```\n\nPassing a block to File.open is the idiomatic form, because the file is closed even if an exception is raised. For large files, iterate rather than reading the whole thing into memory.',
    },
  },
  {
    id: 'ruby-8-what-is-a-hash',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Hash في Ruby؟',
      en: 'What is a Hash in Ruby?',
    },
    answer: {
      ar: 'الـ Hash هي بنية بيانات تُستخدم لتخزين أزواج المفتاح-القيمة.',
      en: 'A Hash stores key/value pairs and preserves insertion order:\n\n```ruby\nuser = { id: 1, name: "Sara" }      # symbol keys — the common idiom\nuser[:name]\nuser.fetch(:email, "unknown")       # a default instead of nil\nuser.each { |key, value| puts "#{key}: #{value}" }\n```\n\nSymbols (`:name`) are preferred over strings as keys because they are immutable and reused, which saves memory. Note the difference between `user[:missing]`, which returns nil silently, and `user.fetch(:missing)`, which raises — the latter often catches bugs earlier.',
    },
  },
  {
    id: 'ruby-9-how-do-you-handle',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التعامل مع الاستثناءات في Ruby؟',
      en: 'How do you handle exceptions in Ruby?',
    },
    answer: {
      ar: 'يمكن التعامل مع الاستثناءات باستخدام الكتل `begin-rescue`.',
      en: '```ruby\nbegin\n  result = service.process(input)\nrescue ValidationError => e\n  logger.warn(e.message)\n  nil\nrescue StandardError => e\n  logger.error(e.full_message)\n  raise\nelse\n  commit(result)          # runs only if nothing was raised\nensure\n  connection.close        # always runs\nend\n```\n\nRescue StandardError rather than Exception: the latter also catches signals and system-level errors you do not want to swallow. In a method body you can omit `begin` — a bare `rescue` inside `def` works the same way.',
    },
  },
  {
    id: 'ruby-10-what-are-blocks-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Blocks في Ruby؟',
      en: 'What are blocks in Ruby?',
    },
    answer: {
      ar: 'Blocks هي أجزاء من الكود يمكن تمريرها كوسائط إلى الدوال، وتُستخدم لتنفيذ كود معين.',
      en: 'A block is a chunk of code passed to a method, written with `do...end` or braces:\n\n```ruby\n[1, 2, 3].each { |n| puts n }\n\nFile.open("out.txt", "w") do |f|\n  f.puts "written"\nend\n\ndef with_timing\n  start = Time.now\n  result = yield                 # call the block\n  puts "took #{Time.now - start}s"\n  result\nend\n```\n\nBlocks are central to Ruby\'s style. The pattern above — a method that wraps a block with setup and teardown — is how Ruby handles resource management, transactions and instrumentation without needing a separate construct.',
    },
  },
  {
    id: 'ruby-11-how-do-you-use',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام المكتبات الخارجية في Ruby؟',
      en: 'How do you use external libraries in Ruby?',
    },
    answer: {
      ar: 'يمكن استخدام `gem` لتثبيت المكتبات الخارجية، مثل: `gem install rails`.',
      en: 'Through gems, installed with the gem command and managed per project with Bundler:\n\n```bash\ngem install rails\nbundle install            # installs everything in the Gemfile\n```\n\nIn a real project you declare dependencies in a Gemfile, Bundler resolves them and writes Gemfile.lock, and `bundle exec` runs commands with exactly those versions. Committing Gemfile.lock is what makes installs reproducible across machines and deployments.',
    },
  },
  {
    id: 'ruby-12-what-are-mixins-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Mixins في Ruby؟',
      en: 'What are mixins in Ruby?',
    },
    answer: {
      ar: 'Mixins تُستخدم لدمج خصائص من كلاسات متعددة، مما يعزز إعادة استخدام الكود.',
      en: 'A mixin is a module included into a class to share behaviour without inheritance:\n\n```ruby\nmodule Timestampable\n  def touch\n    @updated_at = Time.now\n  end\nend\n\nclass Order\n  include Timestampable\nend\n```\n\nThis is Ruby\'s answer to multiple inheritance: a class inherits from one class but can include many modules. `include` adds instance methods, `extend` adds class methods, and `prepend` inserts the module ahead of the class in the lookup chain — which is how you wrap an existing method. Comparable and Enumerable in the standard library are mixins you get a great deal from by implementing a single method.',
    },
  },
  {
    id: 'ruby-13-how-do-iterators-work',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك استخدام الـ Iterators في Ruby؟',
      en: 'How do iterators work in Ruby?',
    },
    answer: {
      ar: 'يمكن استخدام دوال مثل `each` و `map` للتكرار عبر المصفوفات والكلاسات.',
      en: 'Iterators are methods that yield each element to a block:\n\n```ruby\nusers.each { |u| puts u.name }\nnames  = users.map(&:name)\nadults = users.select { |u| u.age >= 18 }\ntotal  = orders.sum(&:amount)\ngrouped = users.group_by(&:country)\n```\n\nThe `&:name` shorthand converts a symbol to a block calling that method, which is extremely common in idiomatic Ruby. Explicit `for` loops exist but are rarely used — `each` and its relatives read better and are the community convention.',
    },
  },
  {
    id: 'ruby-14-what-is-the-enumerable',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Enumerable في Ruby؟',
      en: 'What is the Enumerable module in Ruby?',
    },
    answer: {
      ar: 'Enumerable هو موديول يُستخدم لتوفير دوال للتكرار والتحليل على المجموعات.',
      en: 'Enumerable is a module providing dozens of collection methods — map, select, reject, reduce, sort_by, group_by, partition, find, any?, all? — to any class that implements `each`.\n\n```ruby\nclass Playlist\n  include Enumerable\n\n  def each(&block)\n    @tracks.each(&block)\n  end\nend\n\nplaylist.select { |t| t.duration > 300 }   # works immediately\n```\n\nThat is the practical lesson: implement one method and you inherit the entire collection API. It is one of the clearest demonstrations of how Ruby\'s module system pays off.',
    },
  },
  {
    id: 'ruby-15-how-do-you-write',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك إجراء اختبارات في Ruby؟',
      en: 'How do you write tests in Ruby?',
    },
    answer: {
      ar: 'يمكن استخدام إطار عمل مثل `RSpec` لكتابة وتنفيذ اختبارات الوحدات.',
      en: 'RSpec is the most widely used framework, with Minitest as the lighter standard-library option:\n\n```ruby\nRSpec.describe BankAccount do\n  subject(:account) { described_class.new("Sara", 100) }\n\n  describe "#deposit" do\n    it "increases the balance" do\n      account.deposit(50)\n      expect(account.balance).to eq(150)\n    end\n\n    it "rejects a negative amount" do\n      expect { account.deposit(-10) }.to raise_error(ArgumentError)\n    end\n  end\nend\n```\n\nRSpec\'s readable describe/it structure is part of why testing culture is unusually strong in the Ruby community. It pairs with FactoryBot for test data and Capybara for integration tests.',
    },
  },
  {
    id: 'ruby-16-what-kinds-of-variables',
    difficulty: beginner,
    question: {
      ar: 'ما هي الطرق المختلفة لتعريف المتغيرات في Ruby؟',
      en: 'What kinds of variables does Ruby have?',
    },
    answer: {
      ar: 'يمكن تعريف المتغيرات باستخدام `@` للكائنات، `@@` للمتغيرات العامة، وبدون علامات للمتغيرات المحلية.',
      en: 'Ruby distinguishes them by prefix:\n• `local` — a plain name, scoped to the method or block.\n• `@instance` — belongs to one object.\n• `@@class` — shared by the class and its subclasses.\n• `$global` — visible everywhere.\n• `CONSTANT` — capitalised; reassigning it warns rather than errors.\n\nIn practice you use local and instance variables almost exclusively. Class variables (@@) are generally avoided because they are shared down the inheritance chain in surprising ways; a class-level instance variable or a constant is usually the better choice. Global variables are effectively never used in application code.',
    },
  },
  {
    id: 'ruby-17-how-do-you-manage',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك إدارة البيئة الافتراضية في Ruby؟',
      en: 'How do you manage Ruby versions and environments?',
    },
    answer: {
      ar: 'يمكن استخدام `rbenv` أو `RVM` لإدارة إصدارات Ruby والبيئات الافتراضية.',
      en: 'With a version manager — rbenv, RVM or asdf — which lets each project use its own Ruby version:\n\n```bash\nrbenv install 3.3.0\nrbenv local 3.3.0        # writes .ruby-version for this project\n```\n\nBundler then isolates gems per project. Together they solve the same problem virtual environments solve in Python: two projects on one machine with different versions and different dependencies, without conflict. Committing .ruby-version and Gemfile.lock makes the environment reproducible.',
    },
  },
  {
    id: 'ruby-18-what-does-self-mean',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Self في Ruby؟',
      en: 'What does self mean in Ruby?',
    },
    answer: {
      ar: 'Self يُشير إلى الكائن الحالي، ويُستخدم داخل الكلاسات لتعريف الأساليب والخصائص.',
      en: 'self refers to the current object, and what it points to depends on context:\n• Inside an instance method — the instance.\n• Inside a class body — the class itself.\n• At the top level — the main object.\n\nIts practical uses:\n```ruby\ndef self.find_by_email(email)     # defines a class method\n  # ...\nend\n\ndef deposit(amount)\n  @balance += amount\n  self                            # returning self enables chaining\nend\n\ndef rename(value)\n  self.name = value               # required: without self it creates a local variable\nend\n```\n\nThat last case is the one that catches people out: assignment to an attribute writer needs the explicit `self.` prefix, otherwise Ruby parses it as a new local variable.',
    },
  },
  {
    id: 'ruby-19-how-do-you-build',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك إنشاء واجهة برمجة تطبيقات RESTful في Ruby؟',
      en: 'How do you build a RESTful API in Ruby?',
    },
    answer: {
      ar: 'يمكن استخدام إطار العمل Rails لإنشاء واجهات RESTful بسهولة.',
      en: 'With Rails in API mode, or Sinatra for something smaller:\n\n```ruby\n# config/routes.rb\nresources :products, only: [:index, :show, :create, :update, :destroy]\n\n# app/controllers/products_controller.rb\nclass ProductsController < ApplicationController\n  def index\n    render json: Product.page(params[:page])\n  end\n\n  def create\n    product = Product.new(product_params)\n    if product.save\n      render json: product, status: :created\n    else\n      render json: { errors: product.errors }, status: :unprocessable_entity\n    end\n  end\n\n  private\n\n  def product_params\n    params.require(:product).permit(:name, :price)\n  end\nend\n```\n\nThat `permit` call is not optional — strong parameters are what prevent mass-assignment vulnerabilities. Rails\' `resources` also generates conventional REST routes for you, which is a large part of why it is fast to work in.',
    },
  },
  {
    id: 'ruby-20-what-is-a-gem',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Gem في Ruby؟',
      en: 'What is a gem in Ruby?',
    },
    answer: {
      ar: 'Gem هو حزمة من الكود يمكن تثبيتها واستخدامها، مثل المكتبات البرمجية.',
      en: 'A gem is a packaged Ruby library distributed through RubyGems. It contains code, a version, dependencies and metadata, defined by a .gemspec file.\n\nYou consume gems through Bundler and a Gemfile rather than installing them globally, so each project pins its own versions. Publishing one is equally straightforward — build and push — which is why the ecosystem is so large. Rails itself is a gem, as are Devise, Sidekiq and RSpec.',
    },
  },
  {
    id: 'ruby-21-how-do-you-convert',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تحويل سلسلة نصية إلى عدد في Ruby؟',
      en: 'How do you convert a string to a number in Ruby?',
    },
    answer: {
      ar: 'يمكن استخدام `to_i` لتحويل سلسلة نصية إلى عدد صحيح، مثل: `\'123\'.to_i`.',
      en: '```ruby\n"123".to_i        # 123\n"12abc".to_i      # 12 — stops at the first non-digit, no error\n"abc".to_i        # 0  — silently\n"3.14".to_f       # 3.14\n\nInteger("123")    # 123\nInteger("abc")    # raises ArgumentError\n```\n\nThe distinction matters: `to_i` is permissive and fails silently, which hides bad input. `Integer()` and `Float()` raise on anything invalid, which is what you want when converting data from a user or an API.',
    },
  },
  {
    id: 'ruby-22-what-is-activerecord-in',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ ActiveRecord في Ruby on Rails؟',
      en: 'What is ActiveRecord in Ruby on Rails?',
    },
    answer: {
      ar: 'ActiveRecord هو إطار عمل ORM يُستخدم للتفاعل مع قواعد البيانات في Rails.',
      en: 'ActiveRecord is Rails\' ORM: each model class maps to a database table and each instance to a row, with associations, validations and query building built in.\n\n```ruby\nclass Order < ApplicationRecord\n  belongs_to :user\n  has_many :line_items\n  validates :total, numericality: { greater_than: 0 }\n\n  scope :recent, -> { where("created_at > ?", 1.week.ago) }\nend\n\nOrder.recent.includes(:user).where(status: "paid")\n```\n\nThat `includes` is important: without it you get the N+1 query problem, where loading 100 orders triggers 101 queries. It is the single most common performance issue in Rails applications, and eager loading is the fix.',
    },
  },
  {
    id: 'ruby-23-how-do-you-manage',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك إدارة الأخطاء في Ruby؟',
      en: 'How do you manage errors in Ruby?',
    },
    answer: {
      ar: 'يمكن إدارة الأخطاء باستخدام `begin-rescue` لتحديد السلوك عند حدوث الأخطاء.',
      en: 'Beyond begin/rescue, the practices that matter:\n\n```ruby\nclass PaymentError < StandardError; end\nclass InsufficientFunds < PaymentError; end\n```\n\nDefining your own exception hierarchy lets callers rescue at the right level of specificity. Then:\n• Rescue specific classes, never a bare `rescue` that swallows everything.\n• Preserve context — re-raise rather than returning nil, so failures do not disappear.\n• In Rails, use rescue_from in a controller to map exception types to HTTP responses centrally.\n• Report to a monitoring service such as Sentry rather than relying on log files alone.',
    },
  },
  {
    id: 'ruby-24-which-libraries-and-frameworks',
    difficulty: beginner,
    question: {
      ar: 'ما هي المكتبات الشائعة المستخدمة مع Ruby؟',
      en: 'Which libraries and frameworks are commonly used with Ruby?',
    },
    answer: {
      ar: 'بعض المكتبات الشائعة تشمل Rails، Sinatra، وPuma.',
      en: '• Web: Rails, Sinatra, Hanami.\n• Servers: Puma, Falcon.\n• Background jobs: Sidekiq, Good Job.\n• Testing: RSpec, Minitest, FactoryBot, Capybara.\n• Auth: Devise, Pundit for authorization.\n• Style and quality: RuboCop, Brakeman for security scanning.\n• API serialisation: jbuilder, Blueprinter.\n\nRails dominates to the point that most Ruby job descriptions are really Rails job descriptions.',
    },
  },
  {
    id: 'ruby-25-how-do-you-validate',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك تنفيذ عمليات التحقق من البيانات في Ruby؟',
      en: 'How do you validate data in Ruby?',
    },
    answer: {
      ar: 'يمكن استخدام دوال مثل `valid?` في Rails للتحقق من صحة البيانات.',
      en: 'In Rails, through model validations:\n\n```ruby\nclass User < ApplicationRecord\n  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }\n  validates :age, numericality: { greater_than_or_equal_to: 18 }\nend\n\nuser.valid?          # runs the validations\nuser.errors.full_messages\n```\n\nTwo caveats worth raising: `save` returns false on failure while `save!` raises, so silently ignoring the return value is a common bug; and a uniqueness validation alone has a race condition — you also need a unique index in the database to guarantee it.',
    },
  },
  {
    id: 'ruby-26-what-is-the-difference',
    difficulty: intermediate,
    question: {
      ar: 'ما هو مفهوم الـ Procs وLambdas في Ruby؟',
      en: 'What is the difference between Procs and Lambdas in Ruby?',
    },
    answer: {
      ar: 'Procs وLambdas هما كائنات تُستخدم لتخزين كتلة من التعليمات البرمجية وإعادة استخدامها.',
      en: 'Both wrap a block of code as an object, but they behave differently in two important ways:\n\n```ruby\nsquare_proc   = Proc.new { |x| x * x }\nsquare_lambda = ->(x) { x * x }\n```\n\n1. Arguments: a lambda enforces arity and raises if you pass the wrong number; a proc does not and fills missing arguments with nil.\n2. Return: `return` inside a lambda returns from the lambda; inside a proc it returns from the enclosing method — which can end a method unexpectedly.\n\nSo lambdas behave more like ordinary methods and are the safer default. Procs are what a block becomes when captured with `&block`.',
    },
  },
  {
    id: 'ruby-27-how-do-you-check',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التحقق مما إذا كان عنصر موجودًا في Hash؟',
      en: 'How do you check whether a key exists in a Hash?',
    },
    answer: {
      ar: 'يمكن استخدام `hash.key?(key)` للتحقق مما إذا كان المفتاح موجودًا في Hash.',
      en: '```ruby\nhash.key?(:name)          # also aliased as has_key? and include?\nhash.value?("Sara")       # check by value\nhash.fetch(:name, "N/A")  # read with a default\nhash.dig(:user, :address, :city)   # safe nested access\n```\n\nThe distinction worth knowing: `hash[:missing]` returns nil, which is indistinguishable from a key that genuinely holds nil. `key?` answers that unambiguously, and `fetch` without a default raises — often exactly what you want when the key is required.',
    },
  },
  {
    id: 'ruby-28-how-do-you-work',
    difficulty: beginner,
    question: {
      ar: 'ما هو مفهوم الـ Time في Ruby؟',
      en: 'How do you work with time and dates in Ruby?',
    },
    answer: {
      ar: 'Time تُستخدم لتمثيل الوقت والتاريخ، ويمكن استخدامها مع دوال مثل `Time.now`.',
      en: '```ruby\nTime.now\nTime.now.utc\nTime.parse("2024-01-15 10:30")\n(Time.now + 3600).strftime("%Y-%m-%d %H:%M")\n\n# in Rails\n1.week.ago\nTime.current                # respects the app\'s configured zone\n2.days.from_now\n```\n\nThe practical rule for servers is to store and compute in UTC and convert only for display. In Rails specifically, prefer Time.current over Time.now: the former respects the application\'s configured time zone while the latter uses the server\'s, which is a classic source of off-by-hours bugs.',
    },
  },
  {
    id: 'ruby-29-how-do-you-work',
    difficulty: beginner,
    question: {
      ar: 'كيف يمكنك التعامل مع JSON في Ruby؟',
      en: 'How do you work with JSON in Ruby?',
    },
    answer: {
      ar: 'يمكن استخدام مكتبة `json` لتحليل وإنشاء بيانات JSON.',
      en: '```ruby\nrequire "json"\n\njson = { id: 1, name: "Sara" }.to_json\ndata = JSON.parse(json, symbolize_names: true)\n```\n\nJSON.parse raises JSON::ParserError on malformed input, so wrap it when the source is untrusted. The symbolize_names option gives you symbol keys, which is usually what you want in Ruby. In Rails, `render json:` handles serialisation for you, and for anything beyond trivial shapes a serializer library keeps the response format explicit rather than leaking model attributes.',
    },
  },
  {
    id: 'ruby-30-how-does-threading-work',
    difficulty: intermediate,
    question: {
      ar: 'كيف يمكنك تنفيذ خيوط في Ruby؟',
      en: 'How does threading work in Ruby?',
    },
    answer: {
      ar: 'يمكن استخدام `Thread.new` لإنشاء خيط جديد.',
      en: '```ruby\nthreads = urls.map do |url|\n  Thread.new { fetch(url) }\nend\nresults = threads.map(&:value)\n```\n\nThe crucial context is the GVL (Global VM Lock) in CRuby: only one thread executes Ruby code at a time, so threads do not help CPU-bound work. They do help I/O-bound work, because the lock is released while waiting on the network or disk.\n\nWhich means in practice:\n• I/O-bound concurrency → threads, or Fibers with the async gem.\n• CPU-bound parallelism → separate processes, or an alternative implementation such as JRuby.\n• Background work in a web app → a job queue such as Sidekiq, which is both simpler and more robust than managing threads yourself.',
    },
  },
];

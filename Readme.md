Опис
Уявімо, що ти розробляєш систему управління університетом. Тобі потрібно створити модель для зберігання
інформації про студентів та їхні оцінки в різних предметах. У цій моделі буде використовуватись Record,
щоб зручно оперувати інформацією.

Деталі
Створити інтерфейс Student, що містить наступні поля:
id — унікальний ідентифікатор студента (рядок).
name — ім'я студента (рядок).
age — вік студента (число).
Створити тип Subject, який представлятиме можливі предмети, наприклад: Math, Science, Literature, History.
Створити тип Grades, який буде Record<Subject, number>. Це буде об'єкт, де ключами будуть предмети, а значеннями — оцінки студента за кожен з предметів (значення типу number від 0 до 100).
Створити інтерфейс UniversityRecord, що містить поля:
students — об'єкт типу Record<string, Student>, де ключем буде id студента, а значенням об'єкт типу Student.
grades — об'єкт типу Record<string, Grades>, де ключем буде id студента, а значенням об'єкт типу Grades, який зберігає оцінки студента за предметами.
Створити декілька тестових записів UniversityRecord, додавши кілька студентів та їхні оцінки з різних предметів.
Написати функцію getStudentGrades, яка приймає universityRecord: UniversityRecord та studentId: string, і повертає оцінки студента за предметами.
Написати функцію getAverageGrade, яка приймає universityRecord: UniversityRecord та subject: Subject, і повертає середню оцінку всіх студентів по зазначеному предмету.

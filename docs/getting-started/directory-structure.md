[[toc]]

## Introduction

The directory structure of a Daravel application is similar to that of PHP's Laravel.

Your project structure will look like below after successfully creating a daravel project.

```plaintext:no-line-numbers
my-project/
|--app/
|  |--http/
|  |  |--controllers/
|  |  |  |--controller.dart
|  |  |  |--home_controller.dart
|  |  |--middleware/
|  |--bootstrap
|  |     |--.gitignore
|  |     |--app.dart
|  |     |--config.dart /* generated */
|  |--config
|  |  |--app.dart
|  |  |--database.dart
|  |--models/
|  |     |--user.dart
|  |--core
|  |  |--helpers.dart
|  |--database
|  |  |--migrations/
|  |  |  |--migrations.dart /* generated */
|  |  |  |--2024_11_02_05_21_12_create_users_table.dart
|  |  |  |--2024_11_05_05_21_50_create_roles_table.dart
|  |--public/
|  |  |--index.html
|  |--resources
|  |  |--views/
|  |  |--css/
|  |  |--js/
|  |--routes
|  |  |--api.dart
|  |  |--web.dart
|  |--test/
|  |  |--server_test.dart
|--.dockerignore
|--.env.example
|--.gitignore
|--analysis_options.yaml
|--Dockerfile
|--main.dart
|--pubspec.yaml
|--README.md
```

## Generated Files

As Dart is a compiled language, Daravel relies on code generation to make certain files available to the core app instance in order to function as intended. at any point in time when you need to generate the necessary files for your project, you can run the below:

```bash:no-line-numbers
dartisan generate
```

At this time, the files generated are `bootstrap/config.dart` which is a map of all the files in the `app/config` directory, and `database/migrations/migrations.dart` which contains a list of migration classes contained in the `database/migrations` directory.

## Helpers

Your helpers are usually located in the `app/helpers` directory, though it can be anywhere, while Daravel helper functions can be found in the `core` folder which contains a single `helper.dart` with functions like `env()` and `app()`.

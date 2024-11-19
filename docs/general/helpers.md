[[toc]]

## Introduction

Helper functions in Daravel is just like it is in other back-end frameworks, which are simply functions one can call in any context.

The expected location for your own custom helper files are in the `app/helpers` directory.

## System Helpers

There are helper functions provided by Daravel that can help you achieve certain goals like reading config values, throwing events, etc. though if you look at the implementation of these functions, you'll find that most of them are wrappers around functions provided by the `Core` instance which is the top level logical representation of a Daravel application.

::: tip Note
The system helpers are located in the `core` folder in a single `helpers.dart` file.
:::

The following section talks about these helpers.

### app()

The `app()` helper enables you get access to the `core` instance of the Daravel application, which gives you access to certain system functions.

```dart
final app = app();

final String databasePort = app.env<String>('DB_PORT');
```

### env()

The `env()` function helps you read values in your `.env` file and allows you specify a return value in case the value isn't sent in your environment. It optionally allows you specify the type to cast the returned value to.

```dart
final String callBackUrl = env<String>('CALLBACK_URL', 'http://localhost');
```

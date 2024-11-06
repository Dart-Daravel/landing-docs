[[toc]]

## Requirements

- Dart SDK >= 3.5.2

## Installation

To develop with Daravel, you need to install the Dart SDK. The Dart SDK can be found at [https://dart.dev/get-dart#install](https://dart.dev/get-dart#install).

If you have the [Flutter](https://flutter.dev) SDK installed, you already have the Dart SDK.

With the Dart SDK installed, install Daravel with:

```bash
dart pub global activate daravel_core
```

## Create a Project

To create a Daravel project, run:

```bash
dartisan new <project>
```

## Run

To run you application, do thr following at the root of your project:

```bash
dartisan serve
```

Default server port is `8080`. To use a different port, use the below

```bash
dartisan serve -p 3000
```

You can change the port via a `PORT` environment variable or an `APP_PORT` value in your `.env` file.

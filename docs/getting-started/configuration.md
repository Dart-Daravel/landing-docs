[[toc]]

## Introduction

Config files are one of the back-bones of your application as they can be used to customize how you application behaves or interacts with other applications or services.

Config files are located in the `config` directory of your project.

::: tip Note
For every change ypu make to any config file, you need to run `dartisan generate` to re-generate the config map for your application, thereby making your changes visible to the application.
:::

## Create a Config File

To create a config file, use the command below:

```bash:no-line-numbers
dartisan make:config <config-name>
```

The above command creates `config-name` in the `config` folder.

::: tip Note
`<config-name>` is created as a file in `{$lowercase}.dart` and the class name in file is created in `ucfirst` case.
:::

## Config File Anatomy

A config class named `payment.dart` for instance will likely have the contents below

```dart
import 'package:daravel_core/annotations/config.dart';

@Config()
class Payment {
  String gateway = 'stripe';

  int tokenTTL = 1800;

  int minimumDeposit = 1000;

  // Other config fields
}

```

::: tip Note
Every config file has the `@Config` annotation at the top of the class. without it, the code generator will not be able to find the config file and generate it's map.
:::

## Usage

To get a config value, you can use the `config()` helper function like below to get the `tokenTTL` value in the example config file above:

```dart
int tokenTTL = config<int>('payment.tokenTTL');
```

You can also specify a default value of the config field as the second argument of the `config` function in case the config value isn't set.

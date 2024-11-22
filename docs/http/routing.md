---
title: Routing
---

[[toc]]

## Introduction

Routing in Daravel has a familiar concept just like below

```dart
apiRouter.get('/users', UserController().getUsers);
```

Routes or routers are contained in the `routes` folder and contained in `.dart` files.

To make a router or route file, use the below command.

```bash:no-line-numbers
dartisan make:router <router-name>
```

This creates a route file at `routes/<route-name>`.

Let's say you want to create routes for your API, you run `dartisan make:router api` and a router gets created at `routes/api.dart`.

The contents of the `routes/api.dart` file will look like the below.

```dart
import 'package:daravel_core/daravel_core.dart';

// import '../app/http/controllers/landing_controller.dart';

final apiRouter = DaravelRouter();

void apiRoutes() {
  // apiRouter.get('/v1', LandingController().api);
}

```

## Grouping

Routes can be grouped within routes files. let's say you have a couple of endpoints that always starts with `/users` and you want to group them, you can achieve that with the below

```dart
apiRouter.group('/users', (router) {
    router.post('transfer', UserController().transfer);
    router.delete('/', UserController().delete);
    router.post('block', UserController().block);
});
```

You can also add middlewares to a group

```dart
apiRouter.group('/users', (router) {
    router.post('transfer', UserController().transfer);
    router.delete('/', UserController().delete);
    router.post('block', UserController().block);
}).middleware(ValidUserMiddleware());
```

## Path Parameters

The router also supports passing route parameters. Consider the following route and controller:

```dart title="routes/api.dart"
apiRouter.get('/users/{userId}', UserController().getUser);
```

```dart title="app/controllers/user_controller.dart'
class UserController extends Controller {
  Response getUser(Request req, String userId) async {
    final user = await fetchUserFromDatabase(userId);
    return response().json(user);
  }
}
```

Notice how userId specified in the route can be obtained from a positional parameter in the controller function.

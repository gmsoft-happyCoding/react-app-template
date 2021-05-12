const routeHasChildren = route => route.children && route.children.length;

export const getFlattenedRoutes = (routes, parents: Array<object> = []) =>
  routes.reduce((currentRoute, route) => {
    const routeWithHelpers = {
      ...route,
      parents: [...parents, { name: route.name, url: route.key, follow: route.follow }],
    };

    if (!routeHasChildren(route)) {
      return [...currentRoute, routeWithHelpers];
    }

    return [
      ...currentRoute,
      routeWithHelpers,
      ...getFlattenedRoutes(route.children, [
        ...parents,
        { name: route.name, url: route.key, follow: route.follow },
      ]),
    ];
  }, []);

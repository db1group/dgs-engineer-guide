# Versioning Strategy
There are many ways to version our infrastructure and application. What we will encourage you in this post is to pick one. According to [flow canon](https://flowcanon.com/software/versioning-strategy/): "Using a software versioning strategy for your builds can reduce the cognitive load for everyone developing and using your software. Versioning Strategies allow you to identify each build artifact quickly and easily".

Among the many strategies we have to version something, we have:

- [Semantic Versioning](https://semver.org/)
- [CalVer](https://calver.org/)
- [Other Strategies](https://flowcanon.com/software/versioning-strategy/)

We recommend using semantic versioning as the default strategy for enterprise applications, but any of the above are valid strategies and you should pick what works best for both the product and the team.

## Why semantic versioning?

Semantic versioning is likely the most used versioning strategy in modern software industry and it has a very straitghforward way of describing your software version.

The versioning is basically composed of 3 information: MAJOR.MINOR.PATCH

1. MAJOR version when you make incompatible API changes
2. MINOR version when you add functionality in a backwards compatible manner
3. PATCH version when you make backwards compatible bug fixes

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

Credits:

- [Flowcanon](https://flowcanon.com/software/versioning-strategy/)
- [SemVer](https://semver.org/)
- [CalVer](https://calver.org/)
- [Luke Chen Post](https://nehckl0.medium.com/semver-and-calver-2-popular-software-versioning-schemes-96be80efe36)

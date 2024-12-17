# Backend - .NET Core 8

## Introdução

O backend do Golden Path é uma aplicação .NET Core 8 que utiliza o framework
[ASP.NET Core](https://docs.microsoft.com/pt-br/aspnet/core/?view=aspnetcore-8.0) para a criação de APIs RESTful.

Criamos essa aplicação junto com o Keycloak para a autenticação e autorização dos usuários.

## Estrutura do Projeto

```md
GoldenPath.Api
├── Controllers

GoldenPath.Application
    ├── Adapters
    ├── Configurations
    ├── Dtos
    ├── Extensions
    ├── Handlers
    ├── Commands
    ├── Queries
    ├── Models

GoldenPath.Common
    ├── Multilanguage

GoldenPath.Domain
    ├── Common
    ├── Entities
    ├── Enums
    ├── Exceptions
    ├── Interfaces
    ├── Rules

GoldenPath.Infrastructure
    ├── Configurations
    ├── Extensions
    ├── HttpProviders
    ├── IdentityProviders
    ├── Interfaces
    ├── Mappings
    ├── Migrations
    ├── Persistence
    ├── Repositories
    ├── Services
    ├── Storages
    ├── Transformers
    ├── Util

GoldenPath.Tests
    ├── E2E

Setup
    ├── EmailTemplate
    ├── KeycloakTheme
    ├── Scripts
    ├── Tools
```

# Backend - .NET Core 8

## Introducción

El backend de **Golden Path** es una aplicación .NET Core 8 que utiliza el  
framework [ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0) para crear APIs RESTful.

Esta aplicación fue desarrollada junto con **Keycloak** para la autenticación y autorización de usuarios.

## Estructura del Proyecto

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

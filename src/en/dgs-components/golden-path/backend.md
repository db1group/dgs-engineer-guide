# Backend - .NET Core 8

## Introduction

The backend of **Golden Path** is a .NET Core 8 application that uses the  
[ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0) framework to create RESTful APIs.

This application was developed alongside **Keycloak** for user authentication and authorization.

## Project Structure

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

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base 
WORKDIR /app 
EXPOSE 8080 

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build 

WORKDIR /src 

COPY ./src/Ecomm.Api/ ./Ecomm.Api/
COPY ./src/Ecomm.Contracts/ ./Ecomm.Contracts/

RUN dotnet restore "./Ecomm.Api/Ecomm.Api.csproj"

RUN dotnet publish "./Ecomm.Api/Ecomm.Api.csproj" -c Release -o /app/out 

FROM base AS final 

WORKDIR /app 

COPY --from=build /app/out . 

COPY ./src/Ecomm.Api/gateway.fgp .

ENTRYPOINT ["dotnet", "Ecomm.Api.dll"]
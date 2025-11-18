FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base 
WORKDIR /app 
EXPOSE 8081 

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build 

WORKDIR /src 

COPY ./src/Ecomm.OrderService/ ./Ecomm.OrderService/
COPY ./src/Ecomm.Contracts/ ./Ecomm.Contracts/
RUN dotnet restore "./Ecomm.OrderService/Ecomm.OrderService.csproj" 

RUN dotnet publish "./Ecomm.OrderService/Ecomm.OrderService.csproj" -c Release -o /app/out 


FROM base AS final 

WORKDIR /app 

COPY --from=build /app/out . 

ENTRYPOINT ["dotnet", "Ecomm.OrderService.dll"]
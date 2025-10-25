using System;

namespace Api;

public class AppLogger(string name) : ILogger
{

    public IDisposable? BeginScope<TState>(TState state) where TState : notnull => default;

    public bool IsEnabled(LogLevel logLevel)
    {
        return logLevel == LogLevel.Information;
    }

    public void Log<TState>(
        LogLevel logLevel,

        EventId eventId,

        TState state,

        Exception? exception,

        Func<TState, Exception?, string> formatter
    )
    {
        Console.WriteLine($"eventId:{eventId} state:{state} exception:{exception} name:{name}");
    }
}

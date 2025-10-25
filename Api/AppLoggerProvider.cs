using System;
using System.Collections.Concurrent;

namespace Api;

public sealed class AppLoggerProvider : ILoggerProvider
{

    private ConcurrentDictionary<string, AppLogger> _loggers = new(StringComparer.OrdinalIgnoreCase);
    public ILogger CreateLogger(string name)
    {
        return _loggers.GetOrAdd(name, name => new AppLogger(name));
    }

    public void Dispose()
    {
        _loggers.Clear();
    }
}

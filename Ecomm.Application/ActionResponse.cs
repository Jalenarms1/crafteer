using System;

namespace Ecomm.Application;

public class ActionResponse<TData, TError>
{

    public ActionResponseType ResponseType { get; set; } = default;
    public TData? Data { get; set; } = default;

    public TError? Error { get; set; } = default;

    private ActionResponse() { }
    public static ActionResponse<TData, TError> Failure(TError error, TData? data = default)
    {
        return new ActionResponse<TData, TError>
        {
            ResponseType = ActionResponseType.Failure,
            Error = error,
            Data = data
        };
    }

    public static ActionResponse<TData, TError> Success(TData data)
    {
        return new ActionResponse<TData, TError>
        {
            ResponseType = ActionResponseType.Failure,
            Error = default,
            Data = data
        };
    }

}

public enum ActionResponseType
{
    Success,
    Failure

}
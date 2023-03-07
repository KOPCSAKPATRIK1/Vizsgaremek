namespace Webshop.Desktop.Contracts.Services;

public interface IActivationService
{
    Task ActivateAsync(object activationArgs);
}

﻿#pragma checksum "C:\Users\kl\Desktop\Suli\Vizsgaremek\webshop-desktop\webshop-desktop\Webshop.Desktop\Views\WebshopPage.xaml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "8614611571A241A4C3AAC7124A34120021E671B21869304B7422BF2E56FDD240"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Webshop.Desktop.Views
{
    partial class WebshopPage : 
        global::Microsoft.UI.Xaml.Controls.Page, 
        global::Microsoft.UI.Xaml.Markup.IComponentConnector
    {
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.UI.Xaml.Markup.Compiler"," 1.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        private static class XamlBindingSetters
        {
            public static void Set_Microsoft_UI_Xaml_Controls_WebView2_Source(global::Microsoft.UI.Xaml.Controls.WebView2 obj, global::System.Uri value, string targetNullValue)
            {
                if (value == null && targetNullValue != null)
                {
                    value = (global::System.Uri) global::Microsoft.UI.Xaml.Markup.XamlBindingHelper.ConvertValue(typeof(global::System.Uri), targetNullValue);
                }
                obj.Source = value;
            }
            public static void Set_Microsoft_UI_Xaml_Controls_ProgressRing_IsActive(global::Microsoft.UI.Xaml.Controls.ProgressRing obj, global::System.Boolean value)
            {
                obj.IsActive = value;
            }
            public static void Set_Microsoft_UI_Xaml_UIElement_Visibility(global::Microsoft.UI.Xaml.UIElement obj, global::Microsoft.UI.Xaml.Visibility value)
            {
                obj.Visibility = value;
            }
            public static void Set_Microsoft_UI_Xaml_Controls_Primitives_ButtonBase_Command(global::Microsoft.UI.Xaml.Controls.Primitives.ButtonBase obj, global::System.Windows.Input.ICommand value, string targetNullValue)
            {
                if (value == null && targetNullValue != null)
                {
                    value = (global::System.Windows.Input.ICommand) global::Microsoft.UI.Xaml.Markup.XamlBindingHelper.ConvertValue(typeof(global::System.Windows.Input.ICommand), targetNullValue);
                }
                obj.Command = value;
            }
        };

        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.UI.Xaml.Markup.Compiler"," 1.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        private class WebshopPage_obj1_Bindings :
            global::Microsoft.UI.Xaml.Markup.IDataTemplateComponent,
            global::Microsoft.UI.Xaml.Markup.IXamlBindScopeDiagnostics,
            global::Microsoft.UI.Xaml.Markup.IComponentConnector,
            IWebshopPage_Bindings
        {
            private global::Webshop.Desktop.Views.WebshopPage dataRoot;
            private bool initialized = false;
            private const int NOT_PHASED = (1 << 31);
            private const int DATA_CHANGED = (1 << 30);

            // Fields for each control that has bindings.
            private global::Microsoft.UI.Xaml.Controls.WebView2 obj3;
            private global::Microsoft.UI.Xaml.Controls.StackPanel obj4;
            private global::Microsoft.UI.Xaml.Controls.StackPanel obj5;
            private global::Microsoft.UI.Xaml.Controls.Button obj6;
            private global::Microsoft.UI.Xaml.Controls.Button obj7;
            private global::Microsoft.UI.Xaml.Controls.Button obj8;
            private global::Microsoft.UI.Xaml.Controls.Button obj9;
            private global::Microsoft.UI.Xaml.Controls.HyperlinkButton obj10;
            private global::Microsoft.UI.Xaml.Controls.ProgressRing obj11;

            // Static fields for each binding's enabled/disabled state
            private static bool isobj3SourceDisabled = false;
            private static bool isobj4VisibilityDisabled = false;
            private static bool isobj5VisibilityDisabled = false;
            private static bool isobj6CommandDisabled = false;
            private static bool isobj7CommandDisabled = false;
            private static bool isobj8CommandDisabled = false;
            private static bool isobj9CommandDisabled = false;
            private static bool isobj10CommandDisabled = false;
            private static bool isobj11IsActiveDisabled = false;

            private WebshopPage_obj1_BindingsTracking bindingsTracking;

            public WebshopPage_obj1_Bindings()
            {
                this.bindingsTracking = new WebshopPage_obj1_BindingsTracking(this);
            }

            public void Disable(int lineNumber, int columnNumber)
            {
                if (lineNumber == 19 && columnNumber == 13)
                {
                    isobj3SourceDisabled = true;
                }
                else if (lineNumber == 24 && columnNumber == 13)
                {
                    isobj4VisibilityDisabled = true;
                }
                else if (lineNumber == 32 && columnNumber == 13)
                {
                    isobj5VisibilityDisabled = true;
                }
                else if (lineNumber == 47 && columnNumber == 46)
                {
                    isobj6CommandDisabled = true;
                }
                else if (lineNumber == 50 && columnNumber == 53)
                {
                    isobj7CommandDisabled = true;
                }
                else if (lineNumber == 39 && columnNumber == 51)
                {
                    isobj8CommandDisabled = true;
                }
                else if (lineNumber == 42 && columnNumber == 54)
                {
                    isobj9CommandDisabled = true;
                }
                else if (lineNumber == 34 && columnNumber == 53)
                {
                    isobj10CommandDisabled = true;
                }
                else if (lineNumber == 25 && columnNumber == 27)
                {
                    isobj11IsActiveDisabled = true;
                }
            }

            // IComponentConnector

            public void Connect(int connectionId, global::System.Object target)
            {
                switch(connectionId)
                {
                    case 3: // Views\WebshopPage.xaml line 17
                        this.obj3 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.WebView2>(target);
                        break;
                    case 4: // Views\WebshopPage.xaml line 21
                        this.obj4 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.StackPanel>(target);
                        break;
                    case 5: // Views\WebshopPage.xaml line 29
                        this.obj5 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.StackPanel>(target);
                        break;
                    case 6: // Views\WebshopPage.xaml line 47
                        this.obj6 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.Button>(target);
                        break;
                    case 7: // Views\WebshopPage.xaml line 50
                        this.obj7 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.Button>(target);
                        break;
                    case 8: // Views\WebshopPage.xaml line 39
                        this.obj8 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.Button>(target);
                        break;
                    case 9: // Views\WebshopPage.xaml line 42
                        this.obj9 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.Button>(target);
                        break;
                    case 10: // Views\WebshopPage.xaml line 34
                        this.obj10 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.HyperlinkButton>(target);
                        break;
                    case 11: // Views\WebshopPage.xaml line 25
                        this.obj11 = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.ProgressRing>(target);
                        break;
                    default:
                        break;
                }
            }
                        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.UI.Xaml.Markup.Compiler"," 1.0.0.0")]
                        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
                        public global::Microsoft.UI.Xaml.Markup.IComponentConnector GetBindingConnector(int connectionId, object target) 
                        {
                            return null;
                        }

            // IDataTemplateComponent

            public void ProcessBindings(global::System.Object item, int itemIndex, int phase, out int nextPhase)
            {
                nextPhase = -1;
            }

            public void Recycle()
            {
                return;
            }

            // IWebshopPage_Bindings

            public void Initialize()
            {
                if (!this.initialized)
                {
                    this.Update();
                }
            }
            
            public void Update()
            {
                this.Update_(this.dataRoot, NOT_PHASED);
                this.initialized = true;
            }

            public void StopTracking()
            {
                this.bindingsTracking.ReleaseAllListeners();
                this.initialized = false;
            }

            public void DisconnectUnloadedObject(int connectionId)
            {
                throw new global::System.ArgumentException("No unloadable elements to disconnect.");
            }

            public bool SetDataRoot(global::System.Object newDataRoot)
            {
                this.bindingsTracking.ReleaseAllListeners();
                if (newDataRoot != null)
                {
                    this.dataRoot = global::WinRT.CastExtensions.As<global::Webshop.Desktop.Views.WebshopPage>(newDataRoot);
                    return true;
                }
                return false;
            }

            public void Activated(object obj, global::Microsoft.UI.Xaml.WindowActivatedEventArgs data)
            {
                this.Initialize();
            }

            public void Loading(global::Microsoft.UI.Xaml.FrameworkElement src, object data)
            {
                this.Initialize();
            }

            // Update methods for each path node used in binding steps.
            private void Update_(global::Webshop.Desktop.Views.WebshopPage obj, int phase)
            {
                if (obj != null)
                {
                    if ((phase & (NOT_PHASED | DATA_CHANGED | (1 << 0))) != 0)
                    {
                        this.Update_ViewModel(obj.ViewModel, phase);
                    }
                }
            }
            private void Update_ViewModel(global::Webshop.Desktop.ViewModels.WebshopViewModel obj, int phase)
            {
                this.bindingsTracking.UpdateChildListeners_ViewModel(obj);
                if (obj != null)
                {
                    if ((phase & (NOT_PHASED | DATA_CHANGED | (1 << 0))) != 0)
                    {
                        this.Update_ViewModel_Source(obj.Source, phase);
                        this.Update_ViewModel_IsLoading(obj.IsLoading, phase);
                        this.Update_ViewModel_HasFailures(obj.HasFailures, phase);
                    }
                    if ((phase & (NOT_PHASED | (1 << 0))) != 0)
                    {
                        this.Update_ViewModel_ReloadCommand(obj.ReloadCommand, phase);
                        this.Update_ViewModel_OpenInBrowserCommand(obj.OpenInBrowserCommand, phase);
                    }
                    if ((phase & (NOT_PHASED | DATA_CHANGED | (1 << 0))) != 0)
                    {
                        this.Update_ViewModel_BrowserBackCommand(obj.BrowserBackCommand, phase);
                        this.Update_ViewModel_BrowserForwardCommand(obj.BrowserForwardCommand, phase);
                    }
                }
            }
            private void Update_ViewModel_Source(global::System.Uri obj, int phase)
            {
                if ((phase & ((1 << 0) | NOT_PHASED | DATA_CHANGED)) != 0)
                {
                    // Views\WebshopPage.xaml line 17
                    if (!isobj3SourceDisabled)
                    {
                        XamlBindingSetters.Set_Microsoft_UI_Xaml_Controls_WebView2_Source(this.obj3, obj, null);
                    }
                }
            }
            private void Update_ViewModel_IsLoading(global::System.Boolean obj, int phase)
            {
                if ((phase & (NOT_PHASED | DATA_CHANGED | (1 << 0))) != 0)
                {
                    this.Update_ViewModel_IsLoading_Cast_IsLoading_To_Visibility(obj ? global::Microsoft.UI.Xaml.Visibility.Visible : global::Microsoft.UI.Xaml.Visibility.Collapsed, phase);
                }
                if ((phase & ((1 << 0) | NOT_PHASED | DATA_CHANGED)) != 0)
                {
                    // Views\WebshopPage.xaml line 25
                    if (!isobj11IsActiveDisabled)
                    {
                        XamlBindingSetters.Set_Microsoft_UI_Xaml_Controls_ProgressRing_IsActive(this.obj11, obj);
                    }
                }
            }
            private void Update_ViewModel_IsLoading_Cast_IsLoading_To_Visibility(global::Microsoft.UI.Xaml.Visibility obj, int phase)
            {
                if ((phase & ((1 << 0) | NOT_PHASED | DATA_CHANGED)) != 0)
                {
                    // Views\WebshopPage.xaml line 21
                    if (!isobj4VisibilityDisabled)
                    {
                        XamlBindingSetters.Set_Microsoft_UI_Xaml_UIElement_Visibility(this.obj4, obj);
                    }
                }
            }
            private void Update_ViewModel_HasFailures(global::System.Boolean obj, int phase)
            {
                if ((phase & (NOT_PHASED | DATA_CHANGED | (1 << 0))) != 0)
                {
                    this.Update_ViewModel_HasFailures_Cast_HasFailures_To_Visibility(obj ? global::Microsoft.UI.Xaml.Visibility.Visible : global::Microsoft.UI.Xaml.Visibility.Collapsed, phase);
                }
            }
            private void Update_ViewModel_HasFailures_Cast_HasFailures_To_Visibility(global::Microsoft.UI.Xaml.Visibility obj, int phase)
            {
                if ((phase & ((1 << 0) | NOT_PHASED | DATA_CHANGED)) != 0)
                {
                    // Views\WebshopPage.xaml line 29
                    if (!isobj5VisibilityDisabled)
                    {
                        XamlBindingSetters.Set_Microsoft_UI_Xaml_UIElement_Visibility(this.obj5, obj);
                    }
                }
            }
            private void Update_ViewModel_ReloadCommand(global::System.Windows.Input.ICommand obj, int phase)
            {
                if ((phase & ((1 << 0) | NOT_PHASED )) != 0)
                {
                    // Views\WebshopPage.xaml line 47
                    if (!isobj6CommandDisabled)
                    {
                        XamlBindingSetters.Set_Microsoft_UI_Xaml_Controls_Primitives_ButtonBase_Command(this.obj6, obj, null);
                    }
                    // Views\WebshopPage.xaml line 34
                    if (!isobj10CommandDisabled)
                    {
                        XamlBindingSetters.Set_Microsoft_UI_Xaml_Controls_Primitives_ButtonBase_Command(this.obj10, obj, null);
                    }
                }
            }
            private void Update_ViewModel_OpenInBrowserCommand(global::System.Windows.Input.ICommand obj, int phase)
            {
                if ((phase & ((1 << 0) | NOT_PHASED )) != 0)
                {
                    // Views\WebshopPage.xaml line 50
                    if (!isobj7CommandDisabled)
                    {
                        XamlBindingSetters.Set_Microsoft_UI_Xaml_Controls_Primitives_ButtonBase_Command(this.obj7, obj, null);
                    }
                }
            }
            private void Update_ViewModel_BrowserBackCommand(global::System.Windows.Input.ICommand obj, int phase)
            {
                if ((phase & ((1 << 0) | NOT_PHASED | DATA_CHANGED)) != 0)
                {
                    // Views\WebshopPage.xaml line 39
                    if (!isobj8CommandDisabled)
                    {
                        XamlBindingSetters.Set_Microsoft_UI_Xaml_Controls_Primitives_ButtonBase_Command(this.obj8, obj, null);
                    }
                }
            }
            private void Update_ViewModel_BrowserForwardCommand(global::System.Windows.Input.ICommand obj, int phase)
            {
                if ((phase & ((1 << 0) | NOT_PHASED | DATA_CHANGED)) != 0)
                {
                    // Views\WebshopPage.xaml line 42
                    if (!isobj9CommandDisabled)
                    {
                        XamlBindingSetters.Set_Microsoft_UI_Xaml_Controls_Primitives_ButtonBase_Command(this.obj9, obj, null);
                    }
                }
            }

            [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.UI.Xaml.Markup.Compiler"," 1.0.0.0")]
            [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
            private class WebshopPage_obj1_BindingsTracking
            {
                private global::System.WeakReference<WebshopPage_obj1_Bindings> weakRefToBindingObj; 

                public WebshopPage_obj1_BindingsTracking(WebshopPage_obj1_Bindings obj)
                {
                    weakRefToBindingObj = new global::System.WeakReference<WebshopPage_obj1_Bindings>(obj);
                }

                public WebshopPage_obj1_Bindings TryGetBindingObject()
                {
                    WebshopPage_obj1_Bindings bindingObject = null;
                    if (weakRefToBindingObj != null)
                    {
                        weakRefToBindingObj.TryGetTarget(out bindingObject);
                        if (bindingObject == null)
                        {
                            weakRefToBindingObj = null;
                            ReleaseAllListeners();
                        }
                    }
                    return bindingObject;
                }

                public void ReleaseAllListeners()
                {
                    UpdateChildListeners_ViewModel(null);
                }

                public void PropertyChanged_ViewModel(object sender, global::System.ComponentModel.PropertyChangedEventArgs e)
                {
                    WebshopPage_obj1_Bindings bindings = TryGetBindingObject();
                    if (bindings != null)
                    {
                        string propName = e.PropertyName;
                        global::Webshop.Desktop.ViewModels.WebshopViewModel obj = sender as global::Webshop.Desktop.ViewModels.WebshopViewModel;
                        if (global::System.String.IsNullOrEmpty(propName))
                        {
                            if (obj != null)
                            {
                                bindings.Update_ViewModel_Source(obj.Source, DATA_CHANGED);
                                bindings.Update_ViewModel_IsLoading(obj.IsLoading, DATA_CHANGED);
                                bindings.Update_ViewModel_HasFailures(obj.HasFailures, DATA_CHANGED);
                                bindings.Update_ViewModel_BrowserBackCommand(obj.BrowserBackCommand, DATA_CHANGED);
                                bindings.Update_ViewModel_BrowserForwardCommand(obj.BrowserForwardCommand, DATA_CHANGED);
                            }
                        }
                        else
                        {
                            switch (propName)
                            {
                                case "Source":
                                {
                                    if (obj != null)
                                    {
                                        bindings.Update_ViewModel_Source(obj.Source, DATA_CHANGED);
                                    }
                                    break;
                                }
                                case "IsLoading":
                                {
                                    if (obj != null)
                                    {
                                        bindings.Update_ViewModel_IsLoading(obj.IsLoading, DATA_CHANGED);
                                    }
                                    break;
                                }
                                case "HasFailures":
                                {
                                    if (obj != null)
                                    {
                                        bindings.Update_ViewModel_HasFailures(obj.HasFailures, DATA_CHANGED);
                                    }
                                    break;
                                }
                                case "BrowserBackCommand":
                                {
                                    if (obj != null)
                                    {
                                        bindings.Update_ViewModel_BrowserBackCommand(obj.BrowserBackCommand, DATA_CHANGED);
                                    }
                                    break;
                                }
                                case "BrowserForwardCommand":
                                {
                                    if (obj != null)
                                    {
                                        bindings.Update_ViewModel_BrowserForwardCommand(obj.BrowserForwardCommand, DATA_CHANGED);
                                    }
                                    break;
                                }
                                default:
                                    break;
                            }
                        }
                    }
                }
                private global::Webshop.Desktop.ViewModels.WebshopViewModel cache_ViewModel = null;
                public void UpdateChildListeners_ViewModel(global::Webshop.Desktop.ViewModels.WebshopViewModel obj)
                {
                    if (obj != cache_ViewModel)
                    {
                        if (cache_ViewModel != null)
                        {
                            ((global::System.ComponentModel.INotifyPropertyChanged)cache_ViewModel).PropertyChanged -= PropertyChanged_ViewModel;
                            cache_ViewModel = null;
                        }
                        if (obj != null)
                        {
                            cache_ViewModel = obj;
                            ((global::System.ComponentModel.INotifyPropertyChanged)obj).PropertyChanged += PropertyChanged_ViewModel;
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Connect()
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.UI.Xaml.Markup.Compiler"," 1.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void Connect(int connectionId, object target)
        {
            switch(connectionId)
            {
            case 2: // Views\WebshopPage.xaml line 11
                {
                    this.ContentArea = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.Grid>(target);
                }
                break;
            case 3: // Views\WebshopPage.xaml line 17
                {
                    this.WebView = global::WinRT.CastExtensions.As<global::Microsoft.UI.Xaml.Controls.WebView2>(target);
                }
                break;
            default:
                break;
            }
            this._contentLoaded = true;
        }

        /// <summary>
        /// GetBindingConnector(int connectionId, object target)
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.UI.Xaml.Markup.Compiler"," 1.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public global::Microsoft.UI.Xaml.Markup.IComponentConnector GetBindingConnector(int connectionId, object target)
        {
            global::Microsoft.UI.Xaml.Markup.IComponentConnector returnValue = null;
            switch(connectionId)
            {
            case 1: // Views\WebshopPage.xaml line 1
                {                    
                    global::Microsoft.UI.Xaml.Controls.Page element1 = (global::Microsoft.UI.Xaml.Controls.Page)target;
                    WebshopPage_obj1_Bindings bindings = new WebshopPage_obj1_Bindings();
                    returnValue = bindings;
                    bindings.SetDataRoot(this);
                    this.Bindings = bindings;
                    element1.Loading += bindings.Loading;
                    global::Microsoft.UI.Xaml.Markup.XamlBindingHelper.SetDataTemplateComponent(element1, bindings);
                }
                break;
            }
            return returnValue;
        }
    }
}


type EventKey =
  | 'inject.css'
  | 'modal.alert'
  | 'modal.error'
  | 'modal.warning'
  | 'modal.success'
  | 'modal.confirm'
  | 'modal.toast'
  | 'modal.close'
  | 'store.set'
  | 'store.get'
  | 'store.remove'
  | 'pop.login'
  | 'pop.blockUI'
  | 'pop.unblockUI'
  | 'pop.blockUI.adjust'
  | 'page.gotop'
  | 'page.print'
  | 'account.logout'
  | 'route.angular';

interface Window {
  /**
   * 如果你的应用会集成到宿主环境 (**行采家** 或者 **政府采购网**)
   * 则你可以使用它来和宿主环境通信
   * 例如 路由跳转, 弹出提示信息, 注入css
   */
  eventBus: {
    /**
     * 订阅自定义事件
     * @param eventKey - 事件名称
     * @param listener - 事件监听器
     */
    on: (eventKey: EventKey, listener: (...args: any[]) => void) => void;
    /**
     * 触发事件
     * @param eventKey - 事件名称
     * @param args - 传递给事件监听器的参数
     */
    emit: (eventKey: EventKey, ...args: any[]) => void;
  };
}

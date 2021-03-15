import createOrFindInTop from '@gmsoft/event-bus';

/**
 * 你可以在此定义扩展的 key, eg: 'route.angular' | 'somtingOther'
 */
type ExtraEventKey = string;

const eventBus = createOrFindInTop<ExtraEventKey>();

export default eventBus;

export default interface IConversationsFilter {
  include?: ('im' | 'mpim' | 'private' | 'public')[];
  exclude_external_shared_channels?: boolean;
  exclude_bot_users?: boolean;
}

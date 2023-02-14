// Types generated from specification at https://firebase.google.com/docs/cloud-messaging/http-server-ref

type Value = string | number | boolean;

export interface FcmAndroidNotification {
  /**
   * The notification's title.
   */
  title?: string;

  /**
   * The notification's body text.
   */
  body?: string;

  /**
   * The notification's channel id (new in Android O).
   *
   * The app must create a channel with this channel ID before any notification with this channel ID is received.
   *
   * If you don't send this channel ID in the request, or if the channel ID provided has not yet been created by the app, FCM uses the channel ID specified in the app manifest.
   */
  android_channel_id?: string;

  /**
   * The notification's icon.
   *
   * Sets the notification icon to myicon for drawable resource myicon. If you don't send this key in the request, FCM displays the launcher icon specified in your app manifest.
   */
  icon?: string;

  /**
   * The sound to play when the device receives the notification.
   *
   * Supports "default" or the filename of a sound resource bundled in the app. Sound files must reside in /res/raw/.
   */
  sound?: string;

  /**
   * Identifier used to replace existing notifications in the notification drawer.
   *
   * If not specified, each request creates a new notification.
   *
   * If specified and a notification with the same tag is already being shown, the new notification replaces the existing one in the notification drawer.
   */
  tag?: string;

  /**
   * The notification's icon color, expressed in #rrggbb format.
   */
  color?: string;

  /**
   * The action associated with a user click on the notification.
   *
   * If specified, an activity with a matching intent filter is launched when a user clicks on the notification.
   */
  click_action?: string;

  /**
   * The key to the body string in the app's string resources to use to localize the body text to the user's current localization.
   *
   * See String Resources for more information.
   */
  body_loc_key?: string;

  /**
   * Variable string values to be used in place of the format specifiers in body_loc_key to use to localize the body text to the user's current localization.
   *
   * See Formatting and Styling for more information.
   */
  body_loc_args?: Value[];

  /**
   * The key to the title string in the app's string resources to use to localize the title text to the user's current localization.
   *
   * See String Resources for more information.
   */
  title_loc_key?: string;

  /**
   * Variable string values to be used in place of the format specifiers in title_loc_key to use to localize the title text to the user's current localization.
   *
   * See Formatting and Styling for more information.
   */
  title_loc_args?: Value[];
}

export interface FcmIosNotification {
  /**
   * The notification's title.
   *
   * This field is not visible on phones and tablets.
   */
  title?: string;

  /**
   * The notification's body text.
   */
  body?: string;

  /**
   * The sound to play when the device receives the notification.
   *
   * String specifying sound files in the main bundle of the client app or in the Library/Sounds folder of the app's data container. See the iOS Developer Library for more information.
   */
  sound?: string;

  /**
   * The value of the badge on the home screen app icon.
   *
   * If not specified, the badge is not changed.
   * If set to 0, the badge is removed.
   */
  badge?: string;

  /**
   * The action associated with a user click on the notification.
   *
   * Corresponds to category in the APNs payload.
   */
  click_action?: string;

  /**
   * The notification's subtitle.
   */
  subtitle?: string;

  /**
   * The key to the body string in the app's string resources to use to localize the body text to the user's current localization.
   *
   * Corresponds to loc-key in the APNs payload.
   *
   * See Payload Key Reference and Localizing the Content of Your Remote Notifications for more information.
   */
  body_loc_key?: string;

  /**
   * Variable string values to be used in place of the format specifiers in body_loc_key to use to localize the body text to the user's current localization.
   *
   * Corresponds to loc-args in the APNs payload.
   *
   * See Payload Key Reference and Localizing the Content of Your Remote Notifications for more information.
   */
  body_loc_args?: Value[];

  /**
   * The key to the title string in the app's string resources to use to localize the title text to the user's current localization.
   *
   * Corresponds to title-loc-key in the APNs payload.
   *
   * See Payload Key Reference and Localizing the Content of Your Remote Notifications for more information.
   */
  title_loc_key?: string;

  /**
   * Variable 4string values to be used in place of the format specifiers in title_loc_key to use to localize the title text to the user's current localization.
   *
   * Corresponds to title-loc-args in the APNs payload.
   *
   * See Payload Key Reference and Localizing the Content of Your Remote Notifications for more information.
   */
  title_loc_args?: Value[];
}

export interface FcmWebNotification {
  /**
   * The notification's title.
   */
  title?: string;

  /**
   * The notification's body text.
   */
  body?: string;

  /**
   * The URL to use for the notification's icon.
   */
  icon?: string;

  /**
   * The action associated with a user click on the notification.
   * For all URL values, HTTPS is required.
   */
  click_action?: string;
}

export type FcmNotification = FcmAndroidNotification | FcmIosNotification | FcmWebNotification;

/**
 * An FCM dictionary
 */
export interface Fcm {
  /**
   * This parameter identifies a group of messages (e.g., with collapse_key: "Updates Available") that can be collapsed, so that only the last message gets sent when delivery can be resumed. This is intended to avoid sending too many of the same messages when the device comes back online or becomes active.
   *
   * Note that there is no guarantee of the order in which messages get sent.
   *
   * Note: A maximum of 4 different collapse keys is allowed at any given time. This means that FCM can simultaneously store 4 different messages per client app. If you exceed this number, there is no guarantee which 4 collapse keys FCM will keep.
   */
  collapse_key?: string;

  /**
   * Sets the priority of the message. Valid values are "normal" and "high." On Apple platforms, these correspond to APNs priorities 5 and 10.
   *
   * By default, notification messages are sent with high priority, and data messages are sent with normal priority. Normal priority optimizes the client app's battery consumption and should be used unless immediate delivery is required. For messages with normal priority, the app may receive the message with unspecified delay.
   *
   * When a message is sent with high priority, it is sent immediately, and the app can display a notification.
   */
  priority?: 'normal' | 'high';

  /**
   *   On Apple platforms, use this field to represent content-available in the APNs payload. When a notification or message is sent and this is set to true, an inactive client app is awoken, and the message is sent through APNs as a silent notification and not through FCM. Note that silent notifications in APNs are not guaranteed to be delivered, and can depend on factors such as the user turning on Low Power Mode, force quitting the app, etc. On Android, data messages wake the app by default. On Chrome, currently not supported.
   */
  content_available?: boolean;

  /**
   * On Apple platforms, use this field to represent mutable-content in the APNs payload. When a notification is sent and this is set to true, the content of the notification can be modified before it is displayed, using a Notification Service app extension. This parameter will be ignored for Android and web.
   */
  mutable_content?: 'true' | 'false';

  /**
   * This parameter specifies how long (in seconds) the message should be kept in FCM storage if the device is offline. The maximum time to live supported is 4 weeks, and the default value is 4 weeks. For more information, see Setting the lifespan of a message.
   */
  time_to_live?: number;

  /**
   * (Android only)This parameter specifies the package name of the application where the registration tokens must match in order to receive the message.
   */
  restricted_package_name?: string;

  /**
   * This parameter, when set to true, allows developers to test a request without actually sending a message.
   * The default value is false.
   */
  dry_run?: boolean;

  /**
   *   This parameter specifies the custom key-value pairs of the message's payload.
   *
   *   For example, with data:{"score":"3x1"}:
   *
   *   On Apple platforms, if the message is sent via APNs, it represents the custom data fields. If it is sent via FCM, it would be represented as key value dictionary in AppDelegate application:didReceiveRemoteNotification:.
   *
   *   On Android, this would result in an intent extra named score with the string value 3x1.
   *
   *   The key should not be a reserved word ("from", "message_type", or any word starting with "google" or "gcm"). Do not use any of the words defined in this table (such as collapse_key).
   *
   *   Values in string types are recommended. You have to convert values in objects or other non-string data types (e.g., integers or booleans) to string.
   */
  data?: Record<string, Value>;

  /**
   * This parameter specifies the predefined, user-visible key-value pairs of the notification payload. See Notification payload support for detail. For more information about notification message and data message options, see Message types. If a notification payload is provided, or the content_available option is set to true for a message to an Apple device, the message is sent through APNs, otherwise it is sent through FCM.
   */
  notification?: FcmNotification;
}

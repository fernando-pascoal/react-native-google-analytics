import Hit from "../Hit";

export default class Event extends Hit {
  constructor(category, action, label, value, appVersion, appId, experiment) {
    super(
      {
        t: "event",
        ec: category,
        ea: action,
        el: label,
        ev: value,
        av: appVersion,
        aid: appId,
      },
      experiment
    );
  }
}

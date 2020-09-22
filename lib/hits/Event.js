import Hit from "../Hit";

export default class Event extends Hit {
  constructor(
    category,
    action,
    label,
    value,
    appVersion,
    bundleId,
    applicationName,
    experiment
  ) {
    super(
      {
        t: "event",
        ec: category,
        ea: action,
        el: label,
        ev: value,
        rt: appVersion,
        av: appVersion,
        aid: bundleId,
        aiid: bundleId,
        an: applicationName,
      },
      experiment
    );
  }
}

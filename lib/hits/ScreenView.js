import Hit from "../Hit";

export default class ScreenView extends Hit {
  constructor(
    appName,
    screenName,
    appVersion,
    appId,
    appInstallerId,
    sessao,
    experiment
  ) {
    const sessionProps = sessao ? { sc: sessao } : {};
    super(
      {
        t: "screenview",
        an: appName,
        cd: screenName,
        av: appVersion,
        aid: appId,
        aiid: appInstallerId,
        ...sessionProps,
      },
      experiment
    );
  }
}

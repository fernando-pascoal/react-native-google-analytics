import Serializable from './Serializable';

export default class CustomMetrics extends Serializable {

  addMetric(index, name) {
     this.properties[`cm${index}`] = name;
  }

  removeMetric(index) {
    delete this.properties[`cm${index}`];
  }
}

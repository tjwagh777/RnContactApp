import {BASE_URL} from '@env';
const devEnvironmentVeriables = {
  BASE_URL,
};
const prodEnvironmentVeriables = {
  BASE_URL,
};

export default __DEV__ ? devEnvironmentVeriables : prodEnvironmentVeriables;

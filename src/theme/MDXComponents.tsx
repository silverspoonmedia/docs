import type {MDXComponentsObject} from '@theme/MDXComponents';
import OriginalMDXComponents from '@theme-original/MDXComponents';
import BrowserWindow from '@site/src/components/BrowserWindow';
import PrettyJsonCodeBlock from '@site/src/components/PrettyJsonCodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

const components: MDXComponentsObject = {
  ...OriginalMDXComponents,
  BrowserWindow,
  PrettyJsonCodeBlock,
  Tabs,
  TabItem,
};

export default components;

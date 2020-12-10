# simple-git 简单使用

### 功能

代码批量下载和更新，做本地备份

### 文件介绍

#### config.js

配置保存下载的文件夹位置

如果位置路径设置不对，会自动下载到本项目下的 code 文件夹中

#### list.json

将需要批量操作的 git 仓地址写到此文件

### 操作命令

使用 npm 或者 yarn，此处使用 yarn
由于没有做过多的处理，在程序执行完之前请**不要**中断，否则请**清空**文件夹重新开始

  - 批量克隆 ```yarn clone```
  - 批量更新 ```yarn pull```
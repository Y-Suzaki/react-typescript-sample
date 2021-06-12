## 概要
React Hooks, Redux, Axiosを使った簡単なサンプル。  

副作用がある処理（外部APIからデータ取得など）は、Custom HooksにUseEffectで記載し、  
取得した結果を、Dispatcher経由でAction Creatorを引数にして投げる。  

Containerでは、Custom Hooksから返されるデータを、Props経由でComponentに渡す。
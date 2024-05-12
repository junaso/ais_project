# 入室管理システム：入室登録画面

## 概要

入室登録画面：入室者が情報を入力する画面

## 参考資料

### タスク管理

* [ToDoList（入室管理システム）](https://docs.google.com/spreadsheets/d/10az_8c0DTpI-mFuMQA_gTuvZNDvIQkqn5rdHdKGwzHM/edit#gid=823158480)
* [工程表（入室管理システム）](https://docs.google.com/spreadsheets/d/1RMC5JR0ospESrFqgQwELZuhwmMTl_eF4pQCLSeSwfaw/edit#gid=620640192)

### 要件定義書

* [要件定義書（入室管理システム）](https://docs.google.com/document/d/1EffOVKKnA3hwC1Tf9-wx3S-ycUgtnJAk/edit)

### 画面仕様書

* [画面設計書（入室管理システム_入室登録画面）](https://docs.google.com/spreadsheets/d/1GjBKnrI23RrkqovDtQmOwb_VoPj9Qu66pcKxwwUOrPw/edit#gid=477217875)
* [画面設計書（入室管理システム_入室記録リスト）](https://docs.google.com/spreadsheets/d/1RYWIr_ExNI_tDD9_N7X5QjdpTBTR36oq6jCajzcktd8/edit#gid=451004854)
* [画面設計書（入室管理システム_社員リスト）](https://docs.google.com/spreadsheets/d/1jeDK2cBusS5yoWYcm64OQHu8EbRl1eIbDonoPL9n_yI/edit#gid=477217875)
* [画面設計書（入室管理システム_ログイン）](https://docs.google.com/spreadsheets/d/1Pei9y75m3DfoT9dPsppgcs9l4Gba8rAp-0rYk7sSquM/edit#gid=477217875)

### DB定義

* [DB_テーブル定義書](https://docs.google.com/spreadsheets/d/1VEwpys28ghz5uzyT3fHzA4CKZVTkXoL-/edit#gid=1894093122)
* [DB_MockData](https://docs.google.com/spreadsheets/d/1kRTjijNSRCCNAoS8FNnmZ_5malYqArwu/edit#gid=507158620)

### API仕様

* [API仕様書](https://docs.google.com/spreadsheets/d/1efEeibIl8Pm1W5tKJlgK_dZ7cw5ZmV6f/edit#gid=825898822)

## 作業手順

### 注意事項

* MergeRequestの後、CIテストがパースした後にレビュー申請するとこ。
* CIテストが1時間以上掛る場合はレビュー者に報告してください。
* MergeRequestでレビュー者がコメントした内容について応答すること。
* 新しいブランチは必ず「develop」から作成すること。
* IssueとMergeRequestを1:1で紐づけること。
* 実際の作業内容がIssueの範囲を超えないようにボリュームを調節すること。

### 新しい作業を手順

※（gitlab）以外はローカルでの作業

1. Issueを作成する（gitlab）
2. git checkout devleop
3. git pull origin devleop
4. git checkout -b [新しいブランチ]
5. 作業をする
6. git add [変更・生成したファイル]　/　git add .（変更点の全部ステージにのせる、非推奨）
7. git commit -m "[作業内容（英語）]"
8. git push origin [新しいブランチ]
9. Merge Request を作成（gitlab）
10. CIテストが成功しますとレビュー者に報告

### 衝突が発生した場合

※（gitlab）以外はローカルでの作業

1. git checkout devleop
2. git pull origin devleop
3. git checkout [衝突が発生したブランチ]
4. git merge develop
5. 衝突対応をする
6. git status（ステージに載せられなかった変更があるのか確認）
7. git add [変更・生成したファイル]　/　git add .（変更点の全部ステージにのせる、非推奨）
8. git commit -m "merged develop"
9. git push origin [衝突が発生したブランチ]
10. CIテストが成功しますとレビュー者に報告

### 他の作業（branch）を参考したい場合

※（gitlab）以外はローカルでの作業

1. git checkout devleop
2. git fetch origin
3. git checkout -b [参考するブランチ] origin/[参考するブランチ]

### commitを間違えた場合

※直前commitについての対応

1. git reset --soft HEAD^
2. 内容を修正する
3. git status（ステージに載せられなかった変更があるのか確認）
4. git add [変更・生成したファイル]　/　git add .（変更点の全部ステージにのせる、非推奨）
5. git commit -m "[作業内容（英語）]"

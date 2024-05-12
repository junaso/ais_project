# 作業手順

## 注意事項

* MergeRequestの後、CIテストがパースした後にレビュー申請するとこ。
* MergeRequestでレビュー者がコメントした内容について応答すること。
* 新しいブランチは必ず「develop」から作成すること。
* IssueとMergeRequestを1:1で紐づけること。
* 実際の作業内容がIssueの範囲を超えないようにボリュームを調節すること。

## 新しい作業を手順

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

## 衝突が発生した場合

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

## 他の作業（branch）を参考したい場合

※（gitlab）以外はローカルでの作業

1. git checkout devleop
2. git fetch origin
3. git checkout -b [参考するブランチ] origin/[参考するブランチ]

## commitを間違えた場合

※直前commitについての対応

1. git reset --soft HEAD^
2. 内容を修正する
3. git status（ステージに載せられなかった変更があるのか確認）
4. git add [変更・生成したファイル]　/　git add .（変更点の全部ステージにのせる、非推奨）
5. git commit -m "[作業内容（英語）]"

# TTS Web Interface

这个项目是一个简单的文本转语音（TTS）Web界面，使用Cloudflare Pages和Functions来部署。它允许用户输入文本，选择语音模型和声音，然后生成相应的音频文件。

## 功能

- 支持多种中文语音模型
- 简洁的用户界面
- 实时音频预览
- 使用Cloudflare Pages进行静态文件托管
- 使用Cloudflare Functions进行安全的API调用

## 部署指南

按照以下步骤在Cloudflare上部署这个项目：

1. **准备工作**
   - 注册一个[Cloudflare账户](https://dash.cloudflare.com/sign-up)
   - 确保您有一个GitHub账户

2. **设置仓库**
   - Fork这个仓库到您的GitHub账户
   - 克隆您fork的仓库到本地机器

3. **配置项目文件**
   - 确保您的项目结构如下：
     ```
     your-project/
     ├── functions/
     │   └── api/
     │       └── tts.js
     ├── index.html
     └── README.md
     ```
   - 如果需要，根据您的TTS API供应商调整`functions/api/tts.js`中的API端点

4. **部署到Cloudflare Pages**
   - 登录到您的[Cloudflare dashboard](https://dash.cloudflare.com/)
   - 导航到"Pages"部分
   - 点击"Create a project"按钮
   - 选择"Connect to Git"
   - 选择您包含项目文件的GitHub仓库
   - 在构建设置中：
     - 构建命令：留空
     - 构建输出目录：`/`
   - 点击"Save and Deploy"

5. **配置环境变量**
   - 在您的Pages项目中，转到"Settings" > "Environment variables"
   - 添加一个名为`TTS_API_KEY`的变量，并设置您的TTS API密钥作为其值
   - 保存更改

6. **启用Functions**
   - 在您的Pages项目中，转到"Settings" > "Functions"
   - 确保"Functions"已启用

7. **重新部署**
   - 转到"Deployments"标签
   - 点击"Retry deployment"以应用新的配置

8. **访问您的网站**
   - 部署完成后，Cloudflare会提供一个URL（通常是`https://your-project-name.pages.dev`）
   - 访问这个URL来使用您的TTS Web界面

## 使用说明

1. 在浏览器中打开您的TTS Web界面URL
2. 在"Model"字段中输入TTS模型（默认为"tts-az-1"）
3. 从下拉菜单中选择所需的语音
4. 在文本区域输入您想要转换为语音的文字
5. 点击"Generate Audio"按钮
6. 等待音频生成完成，然后使用内置播放器收听结果

## 注意事项

- 确保您的TTS API密钥保密且安全
- 定期检查并更新您的依赖项
- 遵守您使用的TTS API服务的使用条款和限制

## 贡献

欢迎提交问题和拉取请求来改进这个项目！

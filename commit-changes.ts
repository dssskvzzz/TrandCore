import simpleGit from 'simple-git';

const git = simpleGit();

(async () => {
  try {
    // Добавляем все изменения (git будет учитывать .gitignore для исключения node_modules)
    await git.add('./*');

    // Формируем сообщение коммита с текущей датой
    const now = new Date();
    const commitMessage = `Auto-commit: ${now.toISOString()}`;
    await git.commit(commitMessage);

    // Отправляем изменения в основную ветку
    await git.push('origin', 'master'); // Используйте 'master', а не 'main'
    console.log('Changes committed and pushed to GitHub!');
  } catch (error) {
    console.error('Failed to commit changes:', error);
  }
})();

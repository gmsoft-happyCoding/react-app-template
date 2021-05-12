/** if you want dynamic change envs you can use it */
module.exports = async context => {
  const { inquirer, produce, pluginOption } = context;
  const isDev = process.env.NODE_ENV !== 'production';
  const questions = [
    {
      type: 'list',
      name: 'proxyPlatform',
      message: 'Please choose environment for data proxy:',
      choices: [
        { name: 'test', value: 'test' },
        { name: 'show', value: 'show' },
      ],
      default: 'test',
      when: !pluginOption.proxyPlatform,
    },
  ];

  if (isDev) {
    const answers = await inquirer
      .prompt(questions)
      .then(_answers => ({ ...pluginOption, ..._answers }));
    return produce(context, draft => {
      // eslint-disable-next-line no-param-reassign
      draft.config.envs = {
        ...draft.config.envs,
        REACT_APP_PROXY_PLATFORM: answers.proxyPlatform,
      };
    });
  }

  return context;
};

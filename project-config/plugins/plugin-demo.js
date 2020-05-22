/**
 * if you want dynamic change envs you can use it
 */
module.exports = async context => {
  const { inquirer, produce, pluginOption } = context;

  const questions = [
    {
      type: 'list',
      name: 'runMode',
      message: '请选择运行模式:',
      choices: [
        { name: 'mode1', value: 'mode1' },
        { name: 'mode2', value: 'mode2' },
      ],
      default: 'mode1',
      when: !pluginOption.runMode,
    },
  ];
  const answers = await inquirer
    .prompt(questions)
    .then(_answers => ({ ...pluginOption, ..._answers }));

  return produce(context, draft => {
    draft.config.envs = {
      ...draft.config.envs,
      REACT_APP_RUN_MODE: answers.runMode,
    };
  });
};

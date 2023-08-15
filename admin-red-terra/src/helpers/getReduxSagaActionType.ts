export function getReduxSagaActionType(actionType: string) {
  return actionType.split('/')[1].split('_').slice(0, -1).join('_')
}

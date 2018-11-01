import Component from '../structures/Component';

/**
 * Operator-typed component
 */
export default interface IOperator {
    /**
     * Calculate
     * @param params input value to operate on
     */
    execute(...params: Component[]): Component;
    /**
     * Check and validation the parameters
     * @param params input value will be executed
     */
    assert(params: Component[]): string;
}
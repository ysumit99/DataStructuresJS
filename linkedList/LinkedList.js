import LinkedListNode from './LinkedListNode';
import Comparator from '../Util/Comparator';

export default class LinkedList{

    /**
     *  @param {Function} [comparatorFunction]
     */

     constructor(comparatorFunction){

        /** @var LinkedListNode */
        this.head = null;

        /** @var LinkedListNode */
        this.tail = null;

        this.compare = new Comparator(comparatorFunction);
     }

     /**
      * @param {*} value
      * @return {LinkedList}
      */
     prepend(value){
         //Make new node to be head
         const newNode = new LinkedListNode(value, this.head);
         this.head = newNode;

         // If there is no tail yet let's make new node a tail
         if(!this.tail)
            this.tail = newNode;

        return this;
     }
}
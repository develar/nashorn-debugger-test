package org.jetbrains.nashorn.test;

import javax.script.ScriptEngineManager;

public final class EvalScript {
  public static void main(String[] args) throws Exception {
    new ScriptEngineManager().getEngineByName("nashorn").eval("load(\"src/Script.js\");");
  }

  public static class MyClass {
    public void printMsg(String msg) {
      System.out.println("printMsg : " + msg);
    }
  }
}
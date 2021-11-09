/**
 * @(#)RectangleComponentViewer.java
 * class for generating the frame, timer, calls rectangleComponent
 * @author kalea 
 * @version 1.00 2021/11/8
 */
 
 
//import java.awt.event.MouseListener;
//import java.awt.event.MouseEvent;
import javax.swing.JFrame;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.Timer;
 
public class RectangleComponentViewer {
    public static void main(String[] args) {
        JFrame frame = new JFrame();
        frame.setSize(FRAME_WIDTH, FRAME_HEIGHT);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
 
        final RectangleComponent component = new RectangleComponent();
        frame.add(component);
 
        frame.setVisible(true);

 
        class TimerListener implements ActionListener
        {
            private int dx = 1;
            private int dy = 1;
            public void actionPerformed(ActionEvent event)
            {
                int x = component.getXBox();
                int y = component.getYBox();
               
                if(component.getHeight() <= (dy + component.getHeightBox() + y) || (dy + y) <= 0 )
                {
                    dy = -dy;
                } 
 
                if(component.getWidth() <= (dx + component.getWidthBox() +  x) || (dx + x) <= 0)
                {
                    dx = -dx;
                } 
                

                component.moveTo(x + dx, y +dy);
            }

        }
        ActionListener listener = new TimerListener();
 
        final int DELAY = 15;
        Timer t = new Timer(DELAY, listener);
        t.start();
 
        }
        private static final int FRAME_WIDTH = 400;
        private static final int FRAME_HEIGHT = 300;
    }
    
    

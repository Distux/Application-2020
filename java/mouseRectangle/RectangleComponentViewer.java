/**
 * @(#)RectangleComponentViewer.java
 * class for generating the frame, calls rectangleComponent
 * @author kalea 
 * @version 1.00 2021/11/8
 */
 
 
 
 
import java.awt.event.MouseListener;
import java.awt.event.MouseEvent;
import javax.swing.JFrame;
 
 
public class RectangleComponentViewer {
    public static void main(String[] args) {
        final RectangleComponent component = new RectangleComponent();
        class MousePressListener implements MouseListener
        {
            public void mousePressed(MouseEvent event)
            {
                int x = event.getX();
                int y = event.getY();
                component.moveTo(x, y);
            }
 
            public void mouseExited (MouseEvent event) {}
            public void mouseEntered (MouseEvent event) {}
            public void mouseClicked (MouseEvent event) {}
            public void mouseReleased (MouseEvent event) {}
        }
 
        MouseListener listener = new MousePressListener();
        component.addMouseListener(listener);
 
        JFrame frame = new JFrame();
        frame.add(component);
 
        frame.setSize(FRAME_WIDTH, FRAME_HEIGHT);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
        }
        private static final int FRAME_WIDTH = 400;
        private static final int FRAME_HEIGHT = 300;
    }
    
    
